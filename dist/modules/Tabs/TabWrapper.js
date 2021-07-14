import React from 'react';
import { StyledTab } from './styles';
const TabWrapper = React.forwardRef(({ disabled, onClick, children, isActive, badge, ...props }, ref) => {
    return (React.createElement(StyledTab, { onClick: onClick, "$badge": badge, ...props, "$isActive": isActive, ref: ref, disabled: disabled }, children));
});
export default TabWrapper;
