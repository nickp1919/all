import React from 'react';
import { Action } from '@pulse/ui/components/Title/Action';
import { TITLE_SIZE } from "../../../globalStyled";
const ActionBlock = React.forwardRef((props, ref) => {
    const { size = TITLE_SIZE.H1, children, onClick } = props;
    return (React.createElement(Action, { "$size": size, ref: ref, onClick: onClick }, children));
});
export default ActionBlock;
