import React from 'react';
import { Box } from '@pulse/ui/components/Box';
export const BoxBlock = React.forwardRef((props, ref) => {
    return (React.createElement(Box, { ...props, ref: ref }, props.children));
});
