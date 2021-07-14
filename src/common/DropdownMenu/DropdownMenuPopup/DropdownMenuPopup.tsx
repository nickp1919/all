import React, { useRef } from 'react';

import { TextBlock } from '@modules';

import { isArrayCount, useClickOutside } from '@utils';

import { FONT_VARIANTS } from '@globalStyled';

import { DropdownListItem } from '../DropdownListItem';

import { PopupWrapList } from './styled';
import { TDropdownMenuPopupProps } from './types';

const DropdownMenuPopup: React.FC<TDropdownMenuPopupProps> = ({ list, onClose, className }) => {
  const $wrap = useRef<HTMLUListElement | null>(null);
  const { body2Regular } = FONT_VARIANTS;

  useClickOutside($wrap, onClose);

  if (!isArrayCount(list)) {
    return null;
  }

  return (
    <PopupWrapList className={className} ref={$wrap}>
      {list.map(({ title, component, onClick }, index) => (
        <DropdownListItem key={index} onClick={onClick} onClose={onClose}>
          {component ? component : <TextBlock variant={body2Regular}>{title}</TextBlock>}
        </DropdownListItem>
      ))}
    </PopupWrapList>
  );
};

export default DropdownMenuPopup;
