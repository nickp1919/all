import { TListItem } from '../types';

export type TDropdownMenuPopupProps = {
  list: TListItem[];
  className?: string;
  onClose: () => void;
};
