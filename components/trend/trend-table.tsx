import { ImportTrend } from './import-trend';
import { SetState, TrendData } from 'types';
import { useLocale } from 'hooks/useLocale';
import {
  Center,
  createStyles,
  Group,
  Paper,
  Stack,
  Table,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

interface TrendTableProps {
  selectedCycle: string;
  trendData: TrendData;
  setTrendData: SetState<TrendData>;
}

const useStyles = createStyles(() => ({
  header: {
    paddingBottom: 16,
  },
  headerControls: {
    textAlign: 'right',
  },
}));

export function TrendTable({ selectedCycle, trendData, setTrendData }: TrendTableProps): JSX.Element {
  const { classes } = useStyles();
  const locale = useLocale();

  return (
    <div>
      <Group grow className={classes.header}>
        <Stack spacing={0}>
          <Title order={3}>
            Supply &#38; Demand
          </Title>
          {!!trendData.importDate &&
              <Text size="sm">Imported on: {trendData.importDate.toLocaleDateString(locale)}</Text>}
        </Stack>
        <div className={classes.headerControls}>
          <ImportTrend
              selectedCycle={selectedCycle}
              setTrendData={setTrendData}
          />
        </div>
      </Group>

      <Table fontSize="sm" highlightOnHover>
        <thead>
          <tr>
            <th>Handicraft</th>
            <th>Popularity</th>
            <th>Supply</th>
            <th>Demand Shift</th>
          </tr>
        </thead>
        <tbody>
          {[...trendData.data.values()].map((trend) => {
            return (
              <tr key={trend.item}>
                <td>{trend.item}</td>
                <td>{trend.popularity}</td>
                <td>{trend.supply}</td>
                <td>{trend.demandShift}</td>
              </tr>);
          })}
        </tbody>
      </Table>
      {trendData.data.size === 0 &&
        <>
          <div className="spacer2"></div>
          <Paper p="md"
              sx={(theme) => ({
                backgroundColor: theme.colors.gray[1],
              })}>
            <Center sx={{ flexDirection: 'column' }}>
              <ThemeIcon
                  color="gray"
                  size="lg"
                  radius="lg"
                  variant="filled">
                <i className="bi bi-patch-exclamation"></i>
              </ThemeIcon>
              <Text mt={8}>
                No trend data found!
              </Text>
            </Center>
          </Paper>
        </>}
    </div>
  );
}
