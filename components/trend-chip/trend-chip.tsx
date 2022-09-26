import { calculateModifier, calculateNormalizedValue } from 'utils/workshop';
import { CSSProperties } from 'react';
import { Grid, Group, HoverCard, Text, ThemeIcon } from '@mantine/core';
import { IsProductTrend } from 'types';

interface TrendChipProps {
  trend?: IsProductTrend;
}

export function TrendChip({trend}: TrendChipProps): JSX.Element {
  if (!trend) return <></>;

  const mod = calculateModifier(trend);
  const normVal = calculateNormalizedValue(trend);

  let color = 'transparent'
  let icon = '';
  if (mod < 1) {
    color = `rgba(220, 53, 69, ${normVal/100})`;
    icon = 'bi-arrow-down';
  }
  else if (mod > 1) {
    color = `rgba(32, 201, 151, ${normVal/100})`;
    icon = 'bi-arrow-up';
  }

  const style: CSSProperties = {
    backgroundColor: color,
  };

  return (
    <HoverCard
        position="left"
        closeDelay={0}
        withArrow
        shadow="md">
      <HoverCard.Target>
        <Group spacing={8} grow>
          <ThemeIcon
              sx={{flex: '0 0'}}
              style={style}
              size="sm"
              radius="lg">
            <i className={`bi ${icon}`}></i>
          </ThemeIcon>
          <Text align="right">{(mod * 100).toFixed(0)}%</Text>
        </Group>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Grid sx={{width: 180}} gutter={0}>
          <Grid.Col span={6}><b>Popularity:</b></Grid.Col>
          <Grid.Col span={6}>{trend.popularity}</Grid.Col>
          <Grid.Col span={6}><b>Supply:</b></Grid.Col>
          <Grid.Col span={6}>{trend.supply}</Grid.Col>
        </Grid>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
