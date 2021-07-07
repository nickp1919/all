import React from 'react';

import { Box } from '@pulse/ui/components/Box';

export const BoxBlock = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <Box {...props} ref={ref}>
      {props.children}
    </Box>
  );
});
