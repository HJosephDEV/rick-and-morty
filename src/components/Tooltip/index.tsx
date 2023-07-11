'use client';

import { Tooltip } from 'react-tooltip';

import { TooltipProps } from '@/@types';

export default function TooltipComponent({
  anchorSelect,
  place,
  children
}: TooltipProps): JSX.Element {
  return (
    <Tooltip
      anchorSelect={anchorSelect}
      place={place}
    >
      {children}
    </Tooltip>
  );
}
