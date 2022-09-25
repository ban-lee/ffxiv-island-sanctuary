import { calculateCycleInfo } from 'utils/season-util';
import { cloneDeep } from 'lodash';
import { Container, Group, SegmentedControl, Tabs, Text } from '@mantine/core';
import { Layout } from 'components/layout/layout';
import { MainMenu } from 'components/main-menu/main-menu';
import { NextPage } from 'next';
import { SanctuaryInfo, TrendData } from 'types';
import { TrendTable } from 'components/trend/trend-table';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useState } from 'react';
import { Workshop } from 'components/workshop/workshop';

const TITLE = 'Island Sanctuary Planner';

enum View {
  WORKSHOPS = 'workshops',
  TREND_DATA = 'trendData',
}

const DEFAULT_SANCTUARY_INFO: SanctuaryInfo = {
  rank: 1,
  workshop1Level: 1,
  workshop2Level: 1,
  workshop3Level: 1,
};

const IslandSanctuaryPage: NextPage = () => {
  const [trendData, setTrendData] = useLocalStorage<TrendData>('is-trend-data', {data: new Map()});
  const [sanctuary, setSanctuary] = useLocalStorage('is-sanctuary', cloneDeep(DEFAULT_SANCTUARY_INFO));
  const [selectedCycle, setSelectedCycle] = useState(`${calculateCycleInfo().cycle}`);

  return (
    <Layout layoutProps={{
      title: TITLE,
      description: 'Workshop Helper',
      headerDetails: {
        title: TITLE,
        headerMenu: (<MainMenu sanctuary={sanctuary} setSanctuary={setSanctuary}></MainMenu>),
      },
    }}>
    <>
      <Container
          sx={{
            marginLeft: 0,
            maxWidth: 500,
            paddingBottom: 16,
          }}>
        <Text size="sm" weight="bold">Current Season</Text>
        <SegmentedControl
            size="sm"
            radius="md"
            color="pink"
            fullWidth
            value={selectedCycle}
            onChange={(value) => setSelectedCycle(value)}
            data={['1', '2', '3', '4', '5', '6', '7']}
        />
      </Container>
      <Tabs sx={{margin: '0 24px'}} defaultValue={View.WORKSHOPS}>
        <Tabs.List>
          <Tabs.Tab
              value={View.WORKSHOPS}
              icon={<i className="bi bi-gear-fill" />}
              color="yellow">
            Workshops
          </Tabs.Tab>
          <Tabs.Tab
              value={View.TREND_DATA}
              icon={<i className="bi bi-bar-chart-fill" />}
              color="violet">
            Supply &#38; Demand
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value={View.WORKSHOPS} pt={16}>
          <Group
              grow
              position="center"
              spacing={16}>
            <Workshop
                title="Workshop 1"
                storageKeyPrefix={'w1-'}
                sanctuaryInfo={sanctuary}
                trendData={trendData} />
            <Workshop
                title="Workshop 2"
                storageKeyPrefix={'w2-'}
                sanctuaryInfo={sanctuary}
                trendData={trendData} />
            <Workshop
                title="Workshop 3"
                storageKeyPrefix={'w3-'}
                sanctuaryInfo={sanctuary}
                trendData={trendData} />
          </Group>
        </Tabs.Panel>

        <Tabs.Panel value={View.TREND_DATA} pt={16}>
          <TrendTable
              trendData={trendData}
              setTrendData={setTrendData}
          />
        </Tabs.Panel>
      </Tabs>
    </>
  </Layout>);
}

export default IslandSanctuaryPage;
