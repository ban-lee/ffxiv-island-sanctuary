import styles from './chip.module.scss';
import { Button } from 'reactstrap';
import { Color } from 'types';

export interface ChipOption {
  value: string;
  text: string;
  color?: Color;
}

interface ChipProps {
  option: ChipOption;
  onClose?: () => void;
}

export default function Chip({option, onClose}: ChipProps): JSX.Element {
  function getColor() {
    return option.color || 'gray';
  }

  return (
    <div className={`${styles['chip']} ${getColor()}`}>
      <div className={`${styles['chip-text']}`}>{option.text}</div>
      {!!onClose && <div className={styles['chip-close']}>
        <Button className={`${styles['chip-close-btn']}`} type="button" onClick={onClose}>
          <i className={`bi-x-circle-fill`}></i>
        </Button>
      </div>}
    </div>
  );
}
