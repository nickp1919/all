import React, { useCallback, useState } from 'react';
import { DropdownMenuPopup } from './DropdownMenuPopup';
import { DropdownMenuWrapDiv, DropdownMenuDotsDiv, DropdownMenuDotI } from './styled';
const DropdownMenu = ({ list, className, dropdownClassName }) => {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopupVisibility = useCallback(() => setShowPopup(!showPopup), [showPopup]);
    return (React.createElement(DropdownMenuWrapDiv, { className: className },
        React.createElement(DropdownMenuDotsDiv, { active: showPopup, onClick: togglePopupVisibility },
            React.createElement(DropdownMenuDotI, null),
            React.createElement(DropdownMenuDotI, null),
            React.createElement(DropdownMenuDotI, null)),
        showPopup && (React.createElement(DropdownMenuPopup, { list: list, onClose: togglePopupVisibility, className: dropdownClassName }))));
};
export default DropdownMenu;
