import { ReactNode } from 'react';

export type SizeModal = 's' | 'm' | 'l';

export type ModalWrapperProps = {
  actionBar?: ReactNode;
  onClose: () => void;
  children: ReactNode;
  windowLevel?: number;
  size?: SizeModal;
  header?: ReactNode;
};
