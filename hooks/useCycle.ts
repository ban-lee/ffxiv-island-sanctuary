import { calculateCycleInfo } from 'utils/season-util';
import { useInit } from './useInit';
import { useInterval } from '@mantine/hooks';
import { useState } from 'react';

export function useCycle() {
  const [cycle, setCycle] = useState(calculateCycleInfo());

  function onTick() {
    const newInfo = calculateCycleInfo();
    if (newInfo.cycle === cycle.cycle && newInfo.timeRemaining === cycle.timeRemaining) return;

    setCycle(newInfo);
  }

  const interval = useInterval(onTick, 1000 * 60);

  useInit(() => {
    interval.start();
    return interval.stop;
  });

  return cycle;
}
