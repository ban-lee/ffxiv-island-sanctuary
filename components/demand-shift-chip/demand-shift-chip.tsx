import { CSSProperties } from 'react';
import { DemandShift, IsItemTrend } from 'types';
import { Group, ThemeIcon } from '@mantine/core';

interface DemandShiftChipProps {
  trend?: IsItemTrend;
}

export function DemandShiftChip({trend}: DemandShiftChipProps) {
  if (!trend?.demandShift) return <></>;

  let color = 'transparent';
  let icon = '';

  switch (trend.demandShift) {
    case DemandShift.SKYROCKETING:
      color = `rgba(32, 201, 151, 1)`;
      icon = 'bi-arrow-up';
      break;
    case DemandShift.INCREASING:
      color = `rgba(32, 201, 151, 0.6)`;
      icon = 'bi-arrow-up-right';
      break;
    case DemandShift.DECREASING:
      color = `rgba(220, 53, 69, 0.7)`;
      icon = 'bi-arrow-down-right';
      break;
    case DemandShift.PLUMMETING:
      color = `rgba(220, 53, 69, 1)`;
      icon = 'bi-arrow-down';
      break;
    case DemandShift.NONE:
        break;
  }

  const style: CSSProperties = {
    backgroundColor: color,
  };

  return (
    <Group spacing={8}>
      <ThemeIcon
          style={style}
          size="sm"
          radius="lg">
        <i className={`bi ${icon}`}></i>
      </ThemeIcon>
      <div>{trend.demandShift}</div>
    </Group>
    );
}
