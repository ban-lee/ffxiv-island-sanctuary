import data from 'data/island-sanctuary.json';
import {
  Accordion,
  Checkbox,
  createStyles,
  Grid,
  Group,
  NativeSelect,
  ScrollArea,
  Table,
  ThemeIcon,
  Title,
  Tooltip
  } from '@mantine/core';
import { ChangeEvent, useEffect, useState } from 'react';
import { DemandShiftChip } from 'components/demand-shift-chip/demand-shift-chip';
import { IsProduct, IsProductTrend } from 'types';
import { ScheduleHours } from 'components/workshop/schedule-hours';
import { TrendChip } from 'components/trend-chip/trend-chip';

interface SelectProductTableProps {
  rank: number;
  lastSelected?: IsProduct;
  onSelectProduct: (product: IsProduct) => void;
  trendData: Map<string, IsProductTrend>;

  availableHours: number;
  usedHours: number;
}

const useStyles = createStyles((theme) => ({
  // Accordion Styles API
  control: {
    backgroundColor: theme.colors.gray[1],
    '&:hover': {
      backgroundColor: theme.colors.gray[2],
    },
  },
  panel: {
    backgroundColor: theme.colors.gray[1],
  },

  // Table styles
  selectTable: {
    height: 600,
    'table': {
      tableLayout: 'fixed',
      'tr': {
        cursor: 'default',
      },
      'td': {
        verticalAlign: 'middle',
      },
    },

    '.col-time': {
      width: 65,
    },
    '.col-value': {
      width: 65,
    },
    '.col-trend': {
      width: 120,
    },
    '.col-shift': {
      width: 140,
    },
  },
}));

function productFilter(
  current: IsProduct,
  lastSelected: IsProduct | undefined,
  availableHours: number,
  timeFilterValue: number,
  rank: number,
  onlyBonusAllowed: boolean,
): boolean {
  const matchSameProduct = current.id === lastSelected?.id;
  const matchProductCat =
    !lastSelected ||
    current.purposeCat === lastSelected.purposeCat ||
    (!!current.materialCat && current.materialCat === lastSelected.materialCat);
  const matchAvailableHours = availableHours >= current.time;
  const matchTimeFilter = timeFilterValue === 0 || current.time === timeFilterValue;
  const isRankRequirementMet = rank >= current.rank;

  return (!onlyBonusAllowed || (!matchSameProduct && matchProductCat)) &&
    matchAvailableHours && matchTimeFilter && isRankRequirementMet;
}

export function SelectProductTable(
  {
    rank,
    lastSelected,
    onSelectProduct,
    trendData,
    availableHours,
    usedHours,
  }: SelectProductTableProps): JSX.Element {
  const { classes } = useStyles();
  const [onlyBonusAllowed, setOnlyBonusAllowed] = useState(true);
  const [timeFilterValue, setTimeFilterValue] = useState<number>(0);
  const [displayProducts, setDisplayProducts] = useState<IsProduct[]>(data.products);

  useEffect(() => {
    setDisplayProducts(
      data.products.filter((product) => {
        return productFilter(product, lastSelected, availableHours, timeFilterValue, rank, onlyBonusAllowed);
      }));
  }, [lastSelected, availableHours, timeFilterValue, rank, onlyBonusAllowed]);

  function onTimeFilterChange(e: ChangeEvent) {
    const value = (e.target as HTMLInputElement).value;
    setTimeFilterValue(parseInt(value));
  }

  function getRow(product: IsProduct) {
    const trend = trendData.get(product.item);

    return (
      <>
        <td>{product.item}</td>
        <td css={{ textAlign: 'center' }}>{product.time}</td>
        <td css={{ textAlign: 'center' }}>{product.value}</td>
        <td><TrendChip trend={trend} /></td>
        <td><DemandShiftChip trend={trend} /></td>
      </>
    )
  }

  return (
    <div>
      <ScheduleHours
          availableHours={availableHours}
          usedHours={usedHours}
          fillWidth
      />
      <div className="spacer1"></div>
      <Accordion
          classNames={{
            control: classes.control,
            panel: classes.panel,
          }}
          variant="filled"
          defaultValue="filters">
        <Accordion.Item value="filters">
          <Accordion.Control
              icon={<i className="bi bi-funnel"></i>}
              sx={(theme) => ({
                borderRadius: theme.radius.sm,
              })}>
            <Title order={4}>
              Filters
            </Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Grid
                align="center"
                gutter={8}
                sx={(theme) => ({
                  fontSize: theme.fontSizes.sm,
                  maxWidth: 500,
                })}
                mx="auto">
              <Grid.Col span={12}>
              </Grid.Col>
              <Grid.Col span={5}>
                <label htmlFor="time-filter">Time</label>
              </Grid.Col>
              <Grid.Col span={7}>
                <NativeSelect
                    id="time-filter"
                    data={[
                      { value: '0', label: 'None' },
                      { value: '4', label: '4' },
                      { value: '6', label: '6' },
                      { value: '8', label: '8' },
                    ]}
                    onChange={onTimeFilterChange}
                />
              </Grid.Col>
              <Grid.Col span={5}>
                <label htmlFor="efficiency-bonus">Efficiency Bonus Only</label>
              </Grid.Col>
              <Grid.Col span={7}>
                <div css={{ margin: '0 0 0 auto', width: 'fit-content' }}>
                  <Checkbox
                      id="efficiency-bonus"
                      checked={onlyBonusAllowed}
                      onChange={(e) => setOnlyBonusAllowed(e.target.checked)}
                  />
                </div>
              </Grid.Col>
            </Grid>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <div className="spacer2"></div>
      <ScrollArea className={classes.selectTable}>
        <Table
            fontSize={14}
            highlightOnHover>
          <thead>
            <tr>
              <th className="col-product">Product</th>
              <th className="col-time">Time</th>
              <th className="col-value">Value</th>
              <th className="col-trend">
                <Tooltip label="Value modifier from Popularity and Supply" withinPortal>
                  <Group>
                    Multiplier
                    <ThemeIcon size="xs" radius="lg">
                      <i className="bi bi-question"></i>
                    </ThemeIcon>
                  </Group>
                </Tooltip>
              </th>
              <th className="col-shift">Demand Shift</th>
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
        <div className="spacer1"></div>
      </ScrollArea>
    </div>
  );
}
