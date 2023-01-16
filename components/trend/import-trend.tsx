import { Button, Textarea, Title } from '@mantine/core';
import { ChangeEvent, useEffect, useMemo } from 'react';
import { debounce } from 'lodash';
import { IsProductTrend, TrendData } from 'types';
import { logger } from 'utils/logger';
import { openModal } from '@mantine/modals';
import { parse } from 'csv-parse/sync';
import { SetState } from 'types';

interface ImportTrendProps {
  selectedCycle: string;
  setTrendData: SetState<TrendData>;
}

const EXAMPLE_SHEET_URL =
    'https://docs.google.com/spreadsheets/d/1af0E8NkUIRMLf6dIY8pnMyUdjC9H5CQiAmH9Jaa4R6U/edit?usp=sharing';

export function ImportTrend({ selectedCycle, setTrendData }: ImportTrendProps): JSX.Element {

  const onChangeTrendData = useMemo(() => debounce((e: ChangeEvent) => {
    try {
      const value = (e.target as HTMLInputElement).value;
      const parsedRaw = parse(value, {
        delimiter: '\t',
        trim: true,
        skip_empty_lines: true,
      });

      const data: IsProductTrend[] = parsedRaw.map((raw: string[]) => {
        const item = raw[0];
        const popularity = raw[1];
        const supply = raw[2];
        const demandShift = raw[3];

        return {
          item,
          popularity,
          supply,
          demandShift,
        } as IsProductTrend;
      });

      setTrendData({
        importDate: new Date(),
        cycle: selectedCycle,
        data: new Map(data.map((it) => [it.item, it])),
      });
    } catch(e) {
      logger.error(e);
    }
  }, 200), [selectedCycle, setTrendData]);

  useEffect(() => {
    return () => (onChangeTrendData.cancel());
  }, [onChangeTrendData]);

  function getModalContent() {
    return (
      <>
        <div>
          Import tab-separated values for the popularity, supply and demand shift of each handicraft. <br />
          <a href={EXAMPLE_SHEET_URL} target="_blank" rel="noreferrer">Example Sheet</a>
          <div className="spacer2"></div>
        </div>
        <Textarea
            id="trend-data"
            minRows={10}
            onChange={onChangeTrendData}
        />
      </>
    );
  }

  function showTrendImport() {
    openModal({
      size: "lg",
      centered: true,
      title: (<Title order={3}>Import Trends</Title>),
      children: (getModalContent()),
    });
  }

  return (
    <>
      <Button onClick={showTrendImport}>Import Data</Button>
    </>
  );
}
