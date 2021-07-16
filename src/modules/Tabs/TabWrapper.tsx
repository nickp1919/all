import React from 'react';

import { StyledTab } from './styles';
import { TabCounter } from '@pulse/ui/components/Tabs';

const TabWrapper = React.forwardRef<
  HTMLDivElement,
  {
    onClick?: () => void;
    disabled?: boolean;
    tabIndex?: number;
    isActive?: boolean;
    badge?: boolean;
    children: React.ReactNode;
    count?: number | null;
  }
>(({ disabled, onClick, children, isActive, badge, count, ...props }, ref) => {
  return (
    <StyledTab
      onClick={onClick}
      $badge={badge}
      {...props}
      $isActive={isActive}
      ref={ref}
      disabled={disabled}
    >
      {children}
      {count && <TabCounter>{count}</TabCounter>}
    </StyledTab>
  );
});

export default TabWrapper;
