import { ReactNode } from 'react';

export type TDropdownListItemProps = {
  children: ReactNode;
  onClick: () => void;
  onClose: () => void;
};
