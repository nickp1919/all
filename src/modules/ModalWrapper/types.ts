import { ReactNode, SyntheticEvent } from 'react';
import { KeyEvent } from '@common-lib/ModalOur/types';

export type ModalWrapperProps = {
  visible?: boolean;
  className?: string;
  onClose: (e: KeyEvent) => void;
  onClick?: (e: SyntheticEvent) => void;
  children: ReactNode;
  windowLevel?: number;
  isCloseIcon?: boolean;
};
