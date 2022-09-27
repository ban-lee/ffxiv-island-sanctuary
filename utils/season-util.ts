import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);

export function calculateCycleInfo(): {cycle: number, timeRemaining: string} {
  const today = dayjs().utc();
  const nextCycleStart = today.startOf('day').add(today.hour() >= 8 ? 1 : 0, 'day').hour(8);

  let seasonStart = today.startOf('week').day(2).hour(8);
  if (today.isBefore(seasonStart)) {
    seasonStart = seasonStart.subtract(7, 'day');
  }

  return {
    cycle: today.diff(seasonStart, 'day') + 1,
    timeRemaining: today.to(nextCycleStart),
  };
}
