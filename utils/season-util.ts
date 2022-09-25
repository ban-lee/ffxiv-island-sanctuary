import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(isoWeek);
dayjs.extend(relativeTime);
dayjs.extend(utc);

export function calculateCycleInfo(): {cycle: number, timeRemaining: string} {
  const today = dayjs().utc();
  const nextCycleStart = today.startOf('day').add(today.hour() >= 8 ? 1 : 0, 'day').add(8, 'hour');
  const seasonStart = today.startOf('isoWeek').add(2, 'day').add(8, 'hour');

  return {
    cycle: today.diff(seasonStart, 'day') + 1,
    timeRemaining: today.to(nextCycleStart),
  };
}
