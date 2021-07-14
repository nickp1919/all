import React from 'react';

import { Button } from '@pulse/ui/components/AvatarStack/Button/styled';

import { ButtonProps } from './types';

const AvatarButtonBlock = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { size = 's', children, onClick } = props;

  return (
    <Button $size={size} ref={ref} onClick={onClick}>
      {children}
    </Button>
  );
});

export default AvatarButtonBlock;
