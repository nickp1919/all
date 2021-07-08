import { SystemStyleObject } from '@styled-system/css';
import { StyledComponentProps } from 'styled-components';
import { SizeModal } from '@modules-lib/ModalPageWrapper/types';

export type ActionBarProps = StyledComponentProps<'div', any, {}, never>;

export interface ActionBarStyledProps {
  $isSticky: boolean;
  $size?: SizeModal;
}

export type ActionBarSizes = Record<SizeModal, SystemStyleObject>;
