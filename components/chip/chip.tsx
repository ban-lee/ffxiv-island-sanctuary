import { ActionIcon, Badge } from '@mantine/core';
import { Color } from 'types';
import { useRef } from 'react';

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
  const color = useRef(option.color ?? 'gray');

  const removeButton =
    onClose ?
      <ActionIcon
          aria-label={option.label}
          size="xs"
          color={color.current}
          radius="lg"
          onMouseDown={onClose}>
        <i className="bi bi-x"></i>
      </ActionIcon>
      : <></>;

  return (
    <Badge color={color.current}
        rightSection={removeButton}>
      {option.label}
    </Badge>
  );
}
