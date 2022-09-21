import { createStyles, Grid, Group } from '@mantine/core';

interface ScheduleHoursProps {
  availableHours: number;
  usedHours: number;
}

const useStyles = createStyles({
  scheduledHours: {
    margin: '16px auto 8px auto',
    maxWidth: 350,
  },
  grid: {
    textAlign: 'center',
  },
  digits: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default function ScheduleHours({availableHours, usedHours}: ScheduleHoursProps): JSX.Element {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.scheduledHours}>
      <Grid className={classes.grid} justify="center" gutter={0}>
        <Grid.Col span={4}>Used</Grid.Col>
        <Grid.Col span={4}>Available</Grid.Col>
      </Grid>
      <Grid className={cx(classes.grid, classes.digits)} justify="center" gutter={0}>
        <Grid.Col span={4}>{usedHours}</Grid.Col>
        <Grid.Col span={4}>{availableHours}</Grid.Col>
      </Grid>
    </div>
  );
}
