import { ReactNode } from 'react';

import { Size } from '@pulse/ui/components/Modal/types';
import { TBreadcrumb } from './ModalBreadcrumbs/types';

export type ModalWrapperProps = {
  actionBar?: ReactNode;
  onClose: () => void;
  children: ReactNode;
  windowLevel?: number;
  size?: Size;
  header?: ReactNode;
  breadcrumbs?: TBreadcrumb[];
};
