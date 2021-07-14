import { ReactNode } from 'react';

export type TDropdownMenuProps = {
  list: TListItem[];
  className?: string;
  dropdownClassName?: string;
};

export type TListItem = {
  title?: string;
  component?: ReactNode;
  onClick: () => void;
};
