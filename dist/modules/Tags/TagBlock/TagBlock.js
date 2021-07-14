import React from 'react';
import { getBgColorTag } from "../../../utils";
import { TagStyled } from './styled';
const TagBlock = React.forwardRef((props, ref) => {
    const { bgColor, size = 'm', children, style, as = 'div' } = props;
    // Для iOS бэк шлет текст, например - "tag01", а модуль Tag с платформы принимает толькло цифры
    // типа string "01"
    const color = getBgColorTag(bgColor || '');
    return (React.createElement(TagStyled, { "$size": size, "$color": color, ref: ref, style: style, as: as }, children));
});
export default TagBlock;
