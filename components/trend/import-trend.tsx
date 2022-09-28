import { Button, Textarea, Title } from '@mantine/core';
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import { closeAllModals, openModal } from '@mantine/modals';
import { IsProductTrend, TrendData } from 'types';
import { parse } from 'csv-parse/sync';
import { SetState } from 'types';

interface ImportTrendProps {
  selectedCycle: string;
  setTrendData: SetState<TrendData>;
}

const EXAMPLE_SHEET_URL =
    'https://docs.google.com/spreadsheets/d/1af0E8NkUIRMLf6dIY8pnMyUdjC9H5CQiAmH9Jaa4R6U/edit?usp=sharing';

export function ImportTrend({ selectedCycle, setTrendData }: ImportTrendProps): JSX.Element {
  const [data, setData] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    try {
      const parsedRaw = parse(data, {
        delimiter: '\t',
        trim: true,
        skip_empty_lines: true,
      });

      const trends: IsProductTrend[] = parsedRaw.map((raw: string[]) => {
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
        data: new Map(trends.map((it) => [it.item, it])),
      });

      closeAllModals();
    } catch(e) {
      console.error(e);
    }
  };

  function getModalContent() {
    return (
      <>
        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            Import tab-separated values for the popularity, supply and demand shift for each handicraft. <br />
            <a href={EXAMPLE_SHEET_URL} target="_blank" rel="noreferrer">Example Sheet</a>
          </div>
            <div className="spacer2"></div>
          <Textarea
              id="trend-data"
              minRows={10}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setData(e.target.value)}
          />
          <div className="spacer2"></div>
          <div css={{textAlign: 'end'}}>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </>
    );
  }

  function showTrendImport() {
    openModal({
      size: "lg",
      centered: true,
      title: (<Title order={3}>Import Data</Title>),
      children: (getModalContent()),
    });
  }

  return (
    <>
      <Button onClick={showTrendImport}>Import Data</Button>
    </>
  );
}
