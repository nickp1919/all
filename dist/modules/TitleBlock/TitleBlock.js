import React from 'react';
import { Title } from '@pulse/ui/components/Title';
import ActionBlock from './ActionBlock/ActionBlock';
import { IconsSizes, TITLE_SIZE } from "../../globalStyled";
import { PlusCircleIconSVG } from './styled';
export const TitleBlock = React.forwardRef((props, ref) => {
    const { size = TITLE_SIZE.H1, isActive = false, isTab = false, withPlusButton, iconSize = IconsSizes.medium, onPlusButtonClick, children, } = props;
    return (React.createElement(Title, { "$size": size, "$isTab": isTab, "$isActive": isActive, ref: ref, ...props },
        children,
        withPlusButton && (React.createElement(ActionBlock, { size: size, onClick: onPlusButtonClick },
            React.createElement(PlusCircleIconSVG, { iconsize: iconSize })))));
});
