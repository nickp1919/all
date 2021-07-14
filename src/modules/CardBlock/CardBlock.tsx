import React from 'react';

import { Card } from '@pulse/ui/components/Card';

const CardBlock = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    shadow?: boolean;
  }
>((props, ref) => {
  const { shadow = true } = props;

  return (
    <Card $shadow={shadow} {...props} ref={ref}>
      {props.children}
    </Card>
  );
});

export default CardBlock;
