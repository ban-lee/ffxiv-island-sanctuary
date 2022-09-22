import data from 'data/island-sanctuary.json';
import styles from './select-product-table.module.scss';
import { calculateModifier, calculateNormalizedValue } from 'utils/workshop';
import { ChangeEvent, CSSProperties, useEffect, useState } from 'react';
import { DemandShift, IsItemTrend, IsProduct } from 'types';
import { NativeSelect, Table } from '@mantine/core';

interface SelectProductTableProps {
  rank: number;
  lastSelected?: IsProduct;
  onSelectProduct: (product: IsProduct) => void;
  trendData: Map<string, IsItemTrend>;

  availableHours: number;
  usedHours: number;
}

function productFilter(
    current: IsProduct,
    lastSelected: IsProduct|undefined,
    availableHours: number,
    timeFilterValue: number,
    rank: number,
  ): boolean {
  const matchSameProduct = current.id === lastSelected?.id;
  const matchProductCat =
      !lastSelected ||
      current.purposeCat === lastSelected.purposeCat ||
      (!!current.materialCat && current.materialCat === lastSelected.materialCat);
  const matchAvailableHours = availableHours >= current.time;
  const matchTimeFilter = timeFilterValue === 0 || current.time === timeFilterValue;
  const isRankRequirementMet = rank >= current.rank;

  return !matchSameProduct && matchProductCat && matchAvailableHours && matchTimeFilter && isRankRequirementMet;
}

function getTrend(trend? : IsItemTrend): JSX.Element {
  if (!trend) return <></>;

  const mod = calculateModifier(trend);
  const normVal = calculateNormalizedValue(trend);

  let color = ''
  let icon = '';
  if (mod < 1) {
    color = `rgba(220, 53, 69, ${normVal/100})`;
    icon = 'bi-arrow-down-circle-fill';
  }
  else if (mod > 1) {
    color = `rgba(32, 201, 151, ${normVal/100})`;
    icon = 'bi-arrow-up-circle-fill';
  }

  const style: CSSProperties = {
    'color': color,
  };

  return (
    <div className={styles.modifier}>
    <div className={`${styles['icon-container']}`} style={style}>
      <i className={`bi ${icon}`}></i>
    </div>
    <div>{mod.toFixed(2)}</div>
  </div>
  );
}

function getDemandShift(trend? : IsItemTrend): JSX.Element {
  if (!trend?.demandShift) return <></>;

  let color = '';
  let icon = '';

  switch (trend.demandShift) {
    case DemandShift.SKYROCKETING:
      color = `rgba(32, 201, 151, 1)`;
      icon = 'bi-arrow-up-circle-fill';
      break;
    case DemandShift.INCREASING:
      color = `rgba(32, 201, 151, 0.6)`;
      icon = 'bi-arrow-up-right-circle-fill';
      break;
    case DemandShift.NONE:
      color = `rgba(0, 0, 0, 0.5)`;
      icon = 'bi-dash-circle-fill';
      break;
    case DemandShift.DECREASING:
      color = `rgba(220, 53, 69, 0.7)`;
      icon = 'bi-arrow-down-right-circle-fill';
      break;
    case DemandShift.PLUMMETING:
      color = `rgba(220, 53, 69, 1)`;
      icon = 'bi-arrow-down-circle-fill';
      break;
  }

  const style: CSSProperties = {
    'color': color,
  };

  return (
    <div className={styles['demand-shift']}>
      <div className={`${styles['icon-container']}`} style={style}>
        <i className={`bi ${icon}`}></i>
      </div>
      <div>{trend.demandShift}</div>
    </div>
    );
}

export function SelectProductTable(
  {
    rank,
    lastSelected,
    onSelectProduct,
    trendData,
    availableHours,
  }: SelectProductTableProps): JSX.Element {
  const [timeFilterValue, setTimeFilterValue] = useState<number>(0);
  const [displayProducts, setDisplayProducts] = useState<IsProduct[]>(data.products);

  useEffect(() => {
    setDisplayProducts(
      data.products.filter((product) => productFilter(product, lastSelected, availableHours, timeFilterValue, rank)));
  }, [lastSelected, availableHours, timeFilterValue, rank]);

  function onTimeFilterChange(e: ChangeEvent) {
    const value = (e.target as HTMLInputElement).value;
    setTimeFilterValue(parseInt(value));
  }

  function getRow(product: IsProduct) {
    const trend = trendData.get(product.item);

    return (
      <>
        <td>{product.item}</td>
        <td>{product.time}</td>
        <td>{product.value}</td>
        <td>{getTrend(trend)}</td>
        <td>{getDemandShift(trend)}</td>
      </>
    )
  }

  return (
    <div>
      <div className={styles['select-filters']}>
        <h5>Filters</h5>
            <NativeSelect
                id="time-filter"
                label="Time"
                data={[
                  {value: '0', label: 'None'},
                  {value: '4', label: '4'},
                  {value: '6', label: '6'},
                  {value: '8', label: '8'},
                ]}
                onChange={onTimeFilterChange}>
            </NativeSelect>
      </div>
      <div className={styles['select-table']}>
        <Table fontSize="sm" highlightOnHover>
          <thead>
            <tr>
              <th className={styles['col-product']}>Product</th>
              <th className={styles['col-time']}>Time</th>
              <th className={styles['col-value']}>Value</th>
              <th className={styles['col-trend']}>Trend</th>
              <th className={styles['col-shift']}>Demand Shift</th>
            </tr>
          </thead>
          <tbody>
            {displayProducts.map((product) => {
              return (
                <tr key={product.id} onClick={() => onSelectProduct(product)}>
                  {getRow(product)}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
