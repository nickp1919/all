import React, { useCallback } from 'react';

import { DropdownListItemLi } from './styled';
import { TDropdownListItemProps } from './types';

const DropdownListItem: React.FC<TDropdownListItemProps> = ({ children, onClick, onClose }) => {
  const handledClick = useCallback(() => {
    onClick();
    onClose();
  }, [onClick, onClose]);

  return <DropdownListItemLi onClick={handledClick}>{children}</DropdownListItemLi>;
};

export default DropdownListItem;
