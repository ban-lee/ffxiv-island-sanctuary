import Header from 'components/layout/header';
import ImportTrend from 'components/trend/import-trend';
import Layout from 'components/layout/layout';
import MainMenu from 'components/main-menu/main-menu';
import styles from 'styles/ffxiv.module.scss';
import TrendTable from 'components/trend/trend-table';
import Workshop from 'components/workshop/workshop';
import { Button, Group, Title } from '@mantine/core';
import { cloneDeep } from 'lodash';
import { IsItemTrend, SanctuaryInfo } from 'types';
import { NextPage } from 'next';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useState } from 'react';

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
          <div className={`${styles.workshops}`}>
            <div className={`${styles.workshop}`}>
              <Title order={3}>Workshop 1</Title>
              <Workshop
                  storageKeyPrefix={'w1-'}
                  sanctuaryInfo={sanctuary}
                  trendData={trendData} />
            </div>
            <div className={`${styles.workshop}`}>
              <Title order={3}>Workshop 2</Title>
              <Workshop
                  storageKeyPrefix={'w2-'}
                  sanctuaryInfo={sanctuary}
                  trendData={trendData} />
            </div>
            <div className={`${styles.workshop}`}>
              <Title order={3}>Workshop 3</Title>
              <Workshop
                  storageKeyPrefix={'w3-'}
                  sanctuaryInfo={sanctuary}
                  trendData={trendData} />
            </div>
          </div>}
        {view === View.TREND_DATA &&
          <TrendTable trendData={trendData}></TrendTable>
        }
      </div>
    </>
  </Layout>);
}

export default IslandSanctuaryPage;
