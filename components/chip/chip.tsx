import { Badge, CloseButton } from '@mantine/core';
import { Color } from 'types';

export interface ChipOption {
  value: string;
  label: string;
  color?: Color;
}

interface ChipProps {
  option: ChipOption;
  onClose?: () => void;
}

export function Chip({option, onClose}: ChipProps): JSX.Element {
  const color = option.color ?? 'gray';

  const removeButton =
    onClose ?
      <CloseButton
          aria-label={option.label}
          size="xs"
          color={color}
          radius="lg"
          onMouseDown={onClose}>
        <i className="bi bi-x"></i>
      </CloseButton>
      : <></>;

  return (
    <Badge color={color}
        rightSection={removeButton}>
      {option.label}
    </Badge>
  );
}
