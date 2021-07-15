import React from 'react';
import { getBgColorTag } from "../../../utils";
import { FilterStyled } from './styled';
const FilterBlock = React.forwardRef((props, ref) => {
    const { bgColor, state = 'active', children, counter, onClick } = props;
    const color = getBgColorTag(bgColor || '');
    return (React.createElement(FilterStyled, { "$state": state, "$color": color, ref: ref, "$counter": counter, onClick: onClick }, children));
});
export default FilterBlock;
