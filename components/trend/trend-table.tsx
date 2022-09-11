import styles from './trend.module.scss';
import { IsItemTrend } from 'types';
import { Table } from 'reactstrap';

interface TrendTableProps {
  trendData: Map<string, IsItemTrend>;
}

export default function TrendTable({trendData}: TrendTableProps): JSX.Element {
  return (
    <div className={`${styles['trend-data']}`}>
      <h3>Trend Data</h3>
      <Table size="sm" hover>
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
          {trendData.size === 0 &&
            <div>
              <div className="spacer2"></div>
              No trend data found!
            </div>}
        </tbody>
      </Table>
    </div>
  );
}
