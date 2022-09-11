import Header from 'components/layout/header';
import ImportTrend from 'components/trend/import-trend';
import Layout from 'components/layout/layout';
import styles from 'styles/ffxiv.module.scss';
import TrendTable from 'components/trend/trend-table';
import Workshop from 'components/workshop/workshop';
import { Button } from 'reactstrap';
import { IsItemTrend } from 'types';
import { NextPage } from 'next';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useState } from 'react';

const title = 'Island Sanctuary Planner';

enum View {
  WORKSHOPS,
  TREND_DATA,
}

const IslandSanctuaryPage: NextPage = () => {
  const [view, setView] = useState(View.WORKSHOPS);
  const [viewButtonText, setViewButtonText] = useState('View Trends');
  const [trendData, setTrendData] = useLocalStorage<Map<string, IsItemTrend>>('is-trend-data', new Map());

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
      title,
      description: 'Workshop Helper',
  }}>
    <main>
      <Header title={title}></Header>

      <div className={`${styles.container}`}>
        <div className={styles['trend-controls']}>
          <ImportTrend setTrendData={setTrendData} />
          <Button onClick={() => toggleTrendView()}>{viewButtonText}</Button>
        </div>
        <div className={'spacer2'}></div>
        {view === View.WORKSHOPS && <div className={`${styles.workshops} row`}>
          <div className={`${styles.workshop}`}>
            <h3>Workshop 1</h3>
            <Workshop
                storageKeyPrefix={'w1-'}
                trendData={trendData} />
          </div>
          <div className={`${styles.workshop}`}>
            <h3>Workshop 2</h3>
            <Workshop
                storageKeyPrefix={'w2-'}
                trendData={trendData} />
          </div>
          <div className={`${styles.workshop}`}>
            <h3>Workshop 3</h3>
            <Workshop
                storageKeyPrefix={'w3-'}
                trendData={trendData} />
          </div>
        </div>}
        {view === View.TREND_DATA &&
          <TrendTable trendData={trendData}></TrendTable>
        }
      </div>
    </main>
  </Layout>);
}

export default IslandSanctuaryPage;
