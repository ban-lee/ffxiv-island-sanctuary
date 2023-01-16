import {
  Box,
  Center,
  Container,
  createStyles,
  Group,
  SegmentedControl,
  SegmentedControlItem,
  Tabs,
  Text
  } from '@mantine/core';
import { cloneDeep } from 'lodash';
import { DataContext } from 'contexts/data-context';
import { IsItem, IsProduct, SanctuaryInfo, TrendData } from 'types';
import { Layout } from 'components/layout/layout';
import { MainMenu } from 'components/main-menu/main-menu';
import { NextPage } from 'next';
import { readItems, readProducts } from 'utils/data-utils';
import { TrendTable } from 'components/trend/trend-table';
import { useCycle } from 'hooks/useCycle';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Workshop } from 'components/workshop/workshop';

interface IslandSanctuaryPageProps {
  products: IsProduct[];
  items: IsItem[];
}

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

const useStyles = createStyles({
  cycleSelect: {
    '.today': {
      '> div:first-of-type': {
        display: 'block',
      },
      '> div:last-of-type': {
        marginLeft: 10,
      },
    },
  },
});

const IslandSanctuaryPage: NextPage<IslandSanctuaryPageProps> = ({products, items}: IslandSanctuaryPageProps) => {
  const { classes, cx } = useStyles();
  const cycleInfo = useCycle();
  const [sanctuary, setSanctuary] = useLocalStorage('is-sanctuary', cloneDeep(DEFAULT_SANCTUARY_INFO));
  const [selectedCycle, setSelectedCycle] = useState(`${cycleInfo.cycle}`);
  const [trendData, setTrendData] = useLocalStorage<TrendData>(`is-trend-data-${selectedCycle}`, {data: new Map()});

  const generateCycleSelectItems = () => {
    const data: SegmentedControlItem[] = [];
    for (let i = 1; i <= 7; i++) {
      const cycle = `${i}`;
      data.push({
        value: cycle,
        label: (
          <Center id={`cycle-select-${cycle}`}>
            <Box sx={{display: 'none'}}><i className="bi bi-calendar-check"></i></Box>
            <Box>{cycle}</Box>
          </Center>
        ),
      });
    }
    return data;
  };

  useEffect(() => {
    for (let i = 1; i <= 7; i++) {
      const element = document.getElementById(`cycle-select-${i}`);
      if (!element) return;

      if (i === cycleInfo.cycle) {
        element.classList.add('today');
      } else {
        element.classList.remove('today');
      }
    }
  }, [cycleInfo, classes, cx]);

  return (
    <Layout layoutProps={{
      title: TITLE,
      description: 'Workshop Helper',
      headerDetails: {
        title: TITLE,
        headerMenu: (<MainMenu sanctuary={sanctuary} setSanctuary={setSanctuary}></MainMenu>),
      },
    }}>
    <DataContext.Provider value={{products, items}}>
      <Container
          sx={{
            marginLeft: 0,
            maxWidth: 500,
            paddingBottom: 16,
          }}>
        <Text size="sm" weight="bold">Current Season</Text>
        <SegmentedControl
            className={classes.cycleSelect}
            size="sm"
            radius="md"
            color="pink"
            fullWidth
            value={selectedCycle}
            onChange={(value) => setSelectedCycle(value)}
            data={generateCycleSelectItems()}
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
                metadata={{
                  id: 1,
                  title: "Workshop 1",
                }}
                selectedCycle={selectedCycle}
                sanctuaryInfo={sanctuary}
                trendData={trendData} />
            <Workshop
                metadata={{
                  id: 2,
                  title: "Workshop 2",
                }}
                selectedCycle={selectedCycle}
                sanctuaryInfo={sanctuary}
                trendData={trendData} />
            <Workshop
                metadata={{
                  id: 3,
                  title: "Workshop 3",
                }}
                selectedCycle={selectedCycle}
                sanctuaryInfo={sanctuary}
                trendData={trendData} />
          </Group>
        </Tabs.Panel>

        <Tabs.Panel value={View.TREND_DATA} pt={16}>
          <TrendTable
              selectedCycle={selectedCycle}
              trendData={trendData}
              setTrendData={setTrendData}
          />
        </Tabs.Panel>
      </Tabs>
    </DataContext.Provider>
  </Layout>);
}

export async function getStaticProps() {
  const products: IsProduct[] = await readProducts();
  const items: IsItem[] = await readItems();

  return {
    props: {
      products,
      items,
    },
  };
}

export default IslandSanctuaryPage;
