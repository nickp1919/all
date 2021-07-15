import { ReactNode } from 'react';
import { Size } from '@pulse/ui/components/Title/types';

export type ActionBlockProps = {
  // size = TITLE_SIZE.H1, children, onClick
  size: Size;
  children?: ReactNode;
  onClick?: () => void;
};
