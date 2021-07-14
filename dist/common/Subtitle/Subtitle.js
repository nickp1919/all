import React from 'react';
import { TextBlock } from "../../modules";
import { isUndefined } from "../../utils";
import { IconsSizes } from "../../globalStyled";
import { SubtitleWrapDiv, SubtitleTextDiv, SubtitleCountDiv, PlusCircleIconSVG } from './styled';
const Subtitle = ({ children, itemsLength, withPlusButton, onPlusButtonClick, as = 'h2', variant = 'h2', iconSize = IconsSizes.medium, }) => {
    return (React.createElement(SubtitleWrapDiv, null,
        React.createElement(SubtitleTextDiv, null,
            React.createElement(TextBlock, { as: as, variant: variant }, children),
            !isUndefined(itemsLength) && (React.createElement(SubtitleCountDiv, null,
                React.createElement(TextBlock, { as: as, variant: variant }, itemsLength)))),
        withPlusButton && React.createElement(PlusCircleIconSVG, { onClick: onPlusButtonClick, iconsize: iconSize })));
};
export default Subtitle;
