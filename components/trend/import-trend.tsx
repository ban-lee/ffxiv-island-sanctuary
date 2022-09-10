import _ from 'lodash';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { IsItemTrend } from 'types';
import { parse } from 'csv-parse/sync';
import { SetState } from 'types';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  } from 'reactstrap';

interface ImportTrendProps {
  setTrendData: SetState<Map<string, IsItemTrend>>;
}

export default function ImportTrend({setTrendData}: ImportTrendProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showTrendImport = useRef(() => {
    setIsModalOpen((curr) => !curr);
  }).current;

  const onChangeTrendData = useMemo(() => _.debounce((e: ChangeEvent) => {
    try {
      const value = (e.target as HTMLInputElement).value;
      const parsedRaw = parse(value, {
        delimiter: '\t',
        trim: true,
        skip_empty_lines: true,
      });

      const data: IsItemTrend[] = parsedRaw.map((raw: string[]) => {
        const item = raw[0];
        const popularity = raw[1];
        const supply = raw[2];
        const demandShift = raw[3];

        return {
          item,
          popularity,
          supply,
          demandShift,
        } as IsItemTrend;
      });

      setTrendData(() => new Map(data.map((it) => [it.item, it])));
    } catch(e) {
      console.error(e);
    }
  }, 200), [setTrendData]);

  useEffect(() => {
    return () => (onChangeTrendData.cancel());
  }, [onChangeTrendData]);

  return (
    <>
      <Button color="primary" onClick={showTrendImport}>Import Trends</Button>
      <Modal isOpen={isModalOpen}
          toggle={showTrendImport}
          size="lg"
          centered>
        <ModalHeader
            toggle={showTrendImport}>
          Trend Data
        </ModalHeader>
        <ModalBody>
          <div>
            Import tab-separated value column order:
            <ul>
              <li>Product Name</li>
              <li>Popularity</li>
              <li>Supply</li>
              <li>Demand Shift (optional)</li>
            </ul>
          </div>
          <Input id="trend-data"
              type="textarea"
              style={{'minHeight': '200px'}}
              onChange={onChangeTrendData}></Input>
        </ModalBody>
      </Modal>
    </>
  );
}
