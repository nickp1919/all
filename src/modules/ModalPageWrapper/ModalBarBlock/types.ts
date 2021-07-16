import { SystemStyleObject } from '@styled-system/css';
import { StyledComponentProps } from 'styled-components';
import { Size } from '@pulse/ui/components/Modal/types';

export type ActionBarProps = StyledComponentProps<'div', any, {}, never>;

export interface ActionBarStyledProps {
  $isSticky: boolean;
  $size?: Size;
}

export type ActionBarSizes = Record<Size, SystemStyleObject>;
