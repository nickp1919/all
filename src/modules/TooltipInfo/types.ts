import { ReactElement } from 'react';

export type TIconTooltipProps = {
  overlay?: ReactElement;
  children?: ReactElement;
  icon?: { height: string };
  placement?: string;
  trigger?: string;
  width?: string;
};
