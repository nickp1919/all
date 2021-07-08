import React from 'react';

import { StyledTab } from './styles';

const TabWrapper = React.forwardRef<
  HTMLDivElement,
  {
    onClick?: () => void;
    disabled?: boolean;
    tabIndex?: number;
    isActive?: boolean;
    badge?: boolean;
    children: React.ReactNode;
  }
>(({ disabled, onClick, children, isActive, badge, ...props }, ref) => {
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
    </StyledTab>
  );
});

export default TabWrapper;
