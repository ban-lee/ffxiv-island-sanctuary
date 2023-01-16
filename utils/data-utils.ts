import fs from 'fs';
import path from 'path';
import { finished } from 'stream/promises';
import { IsItem, IsMaterial, IsProduct, ItemCategory, ItemMethod } from 'types';
import { logger } from './logger';
import { Options, parse } from 'csv-parse';

const productsFile = '/data/Island Sanctuary Patch 6.3 - MJICraftworksObject.csv';
const itemsFile = '/data/Island Sanctuary Patch 6.3 - MJIItemPouch.csv';

async function readCsv<T>(file: string, options: Options, parseFn: (record: string[]) => T|undefined): Promise<T[]> {
  const dataDir = path.join(process.cwd(), file);
  logger.info(`Reading csv: ${dataDir}`);

  const records: T[] = [];
  const parser = fs.createReadStream(dataDir, {encoding: 'utf-8'}).pipe(parse(options));

  parser.on('readable', () => {
    let record;
    while ((record = parser.read()) !== null) {
      const parsedRecord = parseFn(record);
      if (parsedRecord) {
        records.push(parsedRecord);
      }
    };
  });

  await finished(parser);
  return records;
}

function toProduct(record: string[]): IsProduct|undefined {
  if (!record[1]) return undefined;

  const materials: IsMaterial[] = [];
  for (let i = 4; i <= 11; i += 2) {
    const qty = parseInt(record[i]);

    if (qty === 0) continue;

    materials.push({
      qty,
      item: record[i + 1],
    });
  }

  const product: IsProduct = {
    id: parseInt(record[0]),
    item: record[1],
    purposeCat: record[2],
    materialCat: record[3],
    rank: parseInt(record[13]),
    time: parseInt(record[14]),
    value: parseInt(record[15]),

    material1: materials[0],
    material2: materials[1],
  };

  if (materials[2]) product.material3 = materials[2];
  if (materials[3]) product.material4 = materials[3];

  return product;
}

export function readProducts(): Promise<IsProduct[]> {
  return readCsv(productsFile, {skip_empty_lines: true, from: 2}, toProduct);
}

function toItem(record: string[]): IsItem {
  const item: IsItem = {
    id: parseInt(record[0]),
    item: record[1],
    category: ItemCategory.UNKNOWN,
    method: record[5] as ItemMethod,
  };

  return item;
}

export function readItems(): Promise<IsItem[]> {
  return readCsv(itemsFile, {skip_empty_lines: true, from: 2}, toItem);
}
