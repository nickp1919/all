import React from 'react';

import { StyledButton } from './styled';

import { ExtraType } from './types';
import { Size, Type } from '@pulse/ui/components/Button/types';

export const Button = React.forwardRef<
  HTMLButtonElement,
  {
    size?: Size;
    onClick?: () => void;
    disabled?: boolean;
    type?: Type;
    className?: string;
    extraType?: ExtraType;
    children: React.ReactNode;
  }
>(({ children, disabled = false, extraType, type, size, onClick, className }, ref) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      $size={size}
      $type={extraType ? 'tertiary' : type}
      extraType={extraType}
      className={className}
      ref={ref}
    >
      {children}
    </StyledButton>
  );
});
