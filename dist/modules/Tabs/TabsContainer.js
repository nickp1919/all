import React from 'react';
import { Tabs } from '@pulse/ui/components/Tabs';
const TabsContainer = React.forwardRef(({ type = 'primary', children, ...props }, ref) => {
    return (React.createElement(Tabs, { "$type": type, ...props, ref: ref }, children));
});
export default TabsContainer;
