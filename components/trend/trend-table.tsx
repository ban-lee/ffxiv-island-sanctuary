import { createStyles, Table, Title } from '@mantine/core';
import { IsItemTrend } from 'types';

interface TrendTableProps {
  trendData: Map<string, IsItemTrend>;
}

const useStyles = createStyles((theme) => ({
  trendData: {
    margin: '0 16px',
    padding: '0 8px',
  },
}));

export function TrendTable({trendData}: TrendTableProps): JSX.Element {
  const { classes } = useStyles();

  return (
    <div className={classes.trendData}>
      <Title order={3}>Trend Data</Title>
      <Table fontSize="sm" highlightOnHover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Popularity</th>
            <th>Supply</th>
            <th>Demand Shift</th>
          </tr>
        </thead>
        <tbody>
          {[...trendData.values()].map((trend) => {
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
      {trendData.size === 0 &&
        <div>
          <div className="spacer2"></div>
          No trend data found!
        </div>}
    </div>
  );
}
