import styles from './workshop.module.scss';

interface ScheduleHoursProps {
  availableHours: number;
  usedHours: number;
}

export default function ScheduleHours({availableHours, usedHours}: ScheduleHoursProps): JSX.Element {
  return (
    <>
      <div className={`${styles['hours']} row`}>
        <div className="col-6 text-center">Used</div> <div className="col-6 text-center">Available</div>
      </div>
      <div className={`${styles['hours']} ${styles['digits']} row`}>
        <div className="col-6 text-center">{usedHours}</div> <div className="col-6 text-center">{availableHours}</div>
      </div>
    </>
  );
}
