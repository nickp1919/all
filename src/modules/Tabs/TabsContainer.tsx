import React from 'react';

import { Tabs } from '@pulse/ui/components/Tabs';
import { Type } from './types';

const TabsContainer = React.forwardRef<HTMLDivElement, { type?: Type; children: React.ReactNode }>(
  ({ type = 'primary', children, ...props }, ref) => {
    return (
      <Tabs $type={type} {...props} ref={ref}>
        {children}
      </Tabs>
    );
  }
);

export default TabsContainer;
