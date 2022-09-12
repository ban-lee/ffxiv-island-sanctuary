import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from 'lodash';
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

const EXAMPLE_SHEET_URL =
    'https://docs.google.com/spreadsheets/d/1af0E8NkUIRMLf6dIY8pnMyUdjC9H5CQiAmH9Jaa4R6U/edit?usp=sharing';

export default function ImportTrend({setTrendData}: ImportTrendProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showTrendImport = useRef(() => {
    setIsModalOpen((curr) => !curr);
  }).current;

  const onChangeTrendData = useMemo(() => debounce((e: ChangeEvent) => {
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
          Import Trends
        </ModalHeader>
        <ModalBody>
          <div>
            Import tab-separated values for the popularity, supply and demand shift of each product. <br />
            <a href={EXAMPLE_SHEET_URL} target="_blank" rel="noreferrer">Example Sheet</a>
            <div className="spacer2"></div>
          </div>
          <Input id="trend-data"
              type="textarea"
              style={{'minHeight': '300px'}}
              onChange={onChangeTrendData}></Input>
        </ModalBody>
      </Modal>
    </>
  );
}
