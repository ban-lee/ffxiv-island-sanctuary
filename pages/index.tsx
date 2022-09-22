import { Button, Group } from '@mantine/core';
import { cloneDeep } from 'lodash';
import { Header } from 'components/layout/header';
import { ImportTrend } from 'components/trend/import-trend';
import { IsItemTrend, SanctuaryInfo } from 'types';
import { Layout } from 'components/layout/layout';
import { MainMenu } from 'components/main-menu/main-menu';
import { NextPage } from 'next';
import { TrendTable } from 'components/trend/trend-table';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useState } from 'react';
import { Workshop } from 'components/workshop/workshop';

const TITLE = 'Island Sanctuary Planner';

enum View {
  WORKSHOPS,
  TREND_DATA,
}

const DEFAULT_SANCTUARY_INFO: SanctuaryInfo = {
  rank: 1,
  workshop1Level: 1,
  workshop2Level: 1,
  workshop3Level: 1,
};

const IslandSanctuaryPage: NextPage = () => {
  const [view, setView] = useState(View.WORKSHOPS);
  const [viewButtonText, setViewButtonText] = useState('View Trends');
  const [trendData, setTrendData] = useLocalStorage<Map<string, IsItemTrend>>('is-trend-data', new Map());
  const [sanctuary, setSanctuary] = useLocalStorage('is-sanctuary', cloneDeep(DEFAULT_SANCTUARY_INFO));

  function toggleTrendView() {
    if (view === View.WORKSHOPS) {
      setView(View.TREND_DATA);
      setViewButtonText('View Workshops');
    } else {
      setView(View.WORKSHOPS);
      setViewButtonText('View Trends');
    }
  }

  return (
    <Layout layoutProps={{
      title: TITLE,
      description: 'Workshop Helper',
  }}>
    <>
      <Header title={TITLE}>
        <MainMenu sanctuary={sanctuary} setSanctuary={setSanctuary}></MainMenu>
      </Header>

      <div css={{paddingBottom: 16}}>

        <Group align="center" position="center">
          <ImportTrend setTrendData={setTrendData} />
          <Button color="violet" onClick={() => toggleTrendView()}>{viewButtonText}</Button>
        </Group>

        <div className={'spacer2'}></div>

        {view === View.WORKSHOPS &&
          <Group grow position="center"
              sx={(theme) => ({
                '> div': {
                  backgroundColor: theme.colors.gray[1],
                  border: `1px solid ${theme.colors.gray[2]}`,
                  boxShadow: theme.shadows.sm,
                  maxWidth: 500,
                  padding: 8,
                  width: '30%',
                },
                'h3': {
                  textAlign: 'center',
                  padding: '4px 8px 0 8px',
                },
                gap: 16,
                margin: '0 16px',
              })}>
            <div>
              <Workshop
                  title="Workshop 1"
                  storageKeyPrefix={'w1-'}
                  sanctuaryInfo={sanctuary}
                  trendData={trendData} />
            </div>
            <div>
              <Workshop
                  title="Workshop 2"
                  storageKeyPrefix={'w2-'}
                  sanctuaryInfo={sanctuary}
                  trendData={trendData} />
            </div>
            <div>
              <Workshop
                  title="Workshop 3"
                  storageKeyPrefix={'w3-'}
                  sanctuaryInfo={sanctuary}
                  trendData={trendData} />
            </div>
          </Group>}
        {view === View.TREND_DATA &&
          <TrendTable trendData={trendData}></TrendTable>
        }
      </div>
    </>
  </Layout>);
}

export default IslandSanctuaryPage;
