import React, { useCallback, useState } from 'react';

import { DropdownMenuPopup } from './DropdownMenuPopup';

import { DropdownMenuWrapDiv, DropdownMenuDotsDiv, DropdownMenuDotI } from './styled';
import { TDropdownMenuProps } from './types';

const DropdownMenu: React.FC<TDropdownMenuProps> = ({ list, className, dropdownClassName }) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopupVisibility = useCallback(() => setShowPopup(!showPopup), [showPopup]);

  return (
    <DropdownMenuWrapDiv className={className}>
      <DropdownMenuDotsDiv active={showPopup} onClick={togglePopupVisibility}>
        <DropdownMenuDotI />
        <DropdownMenuDotI />
        <DropdownMenuDotI />
      </DropdownMenuDotsDiv>

      {showPopup && (
        <DropdownMenuPopup
          list={list}
          onClose={togglePopupVisibility}
          className={dropdownClassName}
        />
      )}
    </DropdownMenuWrapDiv>
  );
};

export default DropdownMenu;
