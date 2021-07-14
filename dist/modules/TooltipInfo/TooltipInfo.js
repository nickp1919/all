import React from 'react';
import Tooltip from 'rc-tooltip';
import { ReactComponent as InfoIcon } from './icon/circle-info-outfilled.svg';
import { TooltipWrapperDiv, InfoIconDiv } from './styled';
export const TooltipInfo = ({ children, overlay, icon, placement, trigger, width = '320px', }) => {
    const _overlay = React.createElement(TooltipWrapperDiv, { width: width }, overlay || '');
    return (React.createElement(Tooltip, { overlay: _overlay, placement: placement || 'top', trigger: trigger || 'hover' }, children ? (children) : (React.createElement(InfoIconDiv, { ...icon },
        React.createElement(InfoIcon, null)))));
};
