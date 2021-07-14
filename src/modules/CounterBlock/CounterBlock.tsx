import React from 'react';

import { Counter } from '@pulse/ui/components/Title';

const CounterBlock = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
  }
>((props, ref) => {
  return (
    <Counter {...props} ref={ref}>
      {props.children}
    </Counter>
  );
});

export default CounterBlock;
