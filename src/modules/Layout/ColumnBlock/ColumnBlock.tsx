import React from 'react';

import { Column } from '@pulse/ui/components/Layout/Column';

const ColumnBlock = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <Column {...props} ref={ref}>
      {props.children}
    </Column>
  );
});

export default ColumnBlock;
