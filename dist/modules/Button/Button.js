import React from 'react';
import { StyledButton } from './styled';
export const Button = React.forwardRef(({ children, disabled = false, extraType, type, size, onClick, className }, ref) => {
    return (React.createElement(StyledButton, { disabled: disabled, onClick: onClick, "$size": size, "$type": extraType ? 'tertiary' : type, extraType: extraType, className: className, ref: ref }, children));
});
