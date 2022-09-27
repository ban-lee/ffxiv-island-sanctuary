import { Badge, Tooltip } from '@mantine/core';
import { useCycle } from 'hooks/useCycle';
import { useMediaQuery } from '@mantine/hooks';

export function Cycle() {
  const isMobile = useMediaQuery('(max-width: 400px)');
  const isSmall = useMediaQuery('(min-width: 400px) and (max-width: 620px)');
  const cycleInfo = useCycle();

  return (
    <Tooltip label={`Next cycle ${cycleInfo.timeRemaining}`}>
      <Badge color="dark" size={isMobile ? 'sm' : (isSmall ? 'md' : 'lg')}>
        Cycle: {cycleInfo.cycle}
      </Badge>
    </Tooltip>
  );
}
