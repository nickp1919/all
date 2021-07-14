import React from 'react';

import { Content } from '@pulse/ui/components/Layout/Content';

const ContentBlock = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <Content {...props} ref={ref}>
      {props.children}
    </Content>
  );
});

export default ContentBlock;
