import React from 'react';

import { AvatarStack } from '@pulse/ui/components/AvatarStack';

import { AvatarStackProps } from './types';

const AvatarStackBlock = React.forwardRef<HTMLDivElement, AvatarStackProps>((props, ref) => {
  const { size = 'm', type, children } = props;

  return (
    <AvatarStack $size={size} $type={type} ref={ref}>
      {children}
    </AvatarStack>
  );
});

export default AvatarStackBlock;
