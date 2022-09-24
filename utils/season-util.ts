import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);

export function calculateCycleInfo(): {cycle: number, timeRemaining: string} {
  const tomorrow = dayjs().startOf('day').add(1, 'day').add(8, 'hour').utc();
  const today = dayjs().utc();
  // Season resets every week at Tues, 8 AM UTC
  const lastReset = today.startOf('week').add(2, 'day').add(8, 'hour');

  return {
    cycle: today.diff(lastReset, 'day') + 1,
    timeRemaining: today.to(tomorrow),
  };
}
