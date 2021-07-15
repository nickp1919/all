import React, { useCallback } from 'react';
import { DropdownListItemLi } from './styled';
const DropdownListItem = ({ children, onClick, onClose }) => {
    const handledClick = useCallback(() => {
        onClick();
        onClose();
    }, [onClick, onClose]);
    return React.createElement(DropdownListItemLi, { onClick: handledClick }, children);
};
export default DropdownListItem;
