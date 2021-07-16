import React from 'react';
import { StyledTab } from './styles';
import { TabCounter } from '@pulse/ui/components/Tabs';
const TabWrapper = React.forwardRef(({ disabled, onClick, children, isActive, badge, count, ...props }, ref) => {
    return (React.createElement(StyledTab, { onClick: onClick, "$badge": badge, ...props, "$isActive": isActive, ref: ref, disabled: disabled },
        children,
        count && React.createElement(TabCounter, null, count)));
});
export default TabWrapper;
