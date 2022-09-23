import { createStyles, MantineColor, Progress } from '@mantine/core';
import { useEffect, useState } from 'react';

interface ProgressSection {
  value: number;
  color: MantineColor;
  label?: string;
  tooltip?: React.ReactNode;
}

interface ScheduleHoursProps {
  availableHours: number;
  usedHours: number;
  fillWidth?: boolean;
}

const useStyles = createStyles({
  scheduledHours: {
    margin: '0 auto',
  },
  grid: {
    textAlign: 'center',
  },
  digits: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export function ScheduleHours({availableHours, usedHours, fillWidth = false}: ScheduleHoursProps): JSX.Element {
  const { classes } = useStyles();
  const [scheduledHours, setScheduledHours] = useState<ProgressSection[]>([]);

  useEffect(() => {
    const usedValue = Math.round(usedHours/24 * 100);
    setScheduledHours([{
      value: usedValue,
      color: 'yellow',
      label: usedHours === 24 ? 'Fully scheduled' : 'Scheduled',
      tooltip: usedHours === 24 ? '' : `${usedHours} hours scheduled`,
    },{
      value: 100- usedValue,
      color: 'gray',
      label: availableHours === 24 ? 'Nothing scheduled' : '',
      tooltip: availableHours === 24 ? '' : `${availableHours} hours free`,
    }]);
  }, [availableHours, usedHours]);

  return (
    <div className={classes.scheduledHours} css={{maxWidth: fillWidth ? '' : 350}}>
      <Progress
          aria-label="Amount of time scheduled"
          color="yellow"
          size={24}
          sections={scheduledHours} />
    </div>
  );
}
