import React from 'react';

import { Gutter } from '@pulse/ui/components/Layout/Gutter';

const GutterBlock = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <Gutter {...props} ref={ref}>
      {props.children}
    </Gutter>
  );
});

export default GutterBlock;
