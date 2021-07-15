import React, { useRef } from 'react';
import { TextBlock } from "../../../modules";
import { isArrayCount, useClickOutside } from "../../../utils";
import { FONT_VARIANTS } from "../../../globalStyled";
import { DropdownListItem } from '../DropdownListItem';
import { PopupWrapList } from './styled';
const DropdownMenuPopup = ({ list, onClose, className }) => {
    const $wrap = useRef(null);
    const { body2Regular } = FONT_VARIANTS;
    useClickOutside($wrap, onClose);
    if (!isArrayCount(list)) {
        return null;
    }
    return (React.createElement(PopupWrapList, { className: className, ref: $wrap }, list.map(({ title, component, onClick }, index) => (React.createElement(DropdownListItem, { key: index, onClick: onClick, onClose: onClose }, component ? component : React.createElement(TextBlock, { variant: body2Regular }, title))))));
};
export default DropdownMenuPopup;
