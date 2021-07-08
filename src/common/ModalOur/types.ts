import { SyntheticEvent } from 'react';

export type KeyEvent = { keyCode: number };

export type IModal = {
  className?: string;
  onClose: (e: KeyEvent) => void;
  onClick?: (e: SyntheticEvent) => void;
  visible?: boolean;
  isCloseIcon?: boolean;
};
