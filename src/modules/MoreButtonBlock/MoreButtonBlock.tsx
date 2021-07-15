import React from 'react';

import { MoreButton } from '@pulse/ui/components/Group';

import { TMoreButtonBlock } from './types';

export const MoreButtonBlock: React.FC<TMoreButtonBlock> = (props) => {
  const { opened, children } = props;

  return (
    <MoreButton {...props} $opened={opened}>
      {children}
    </MoreButton>
  );
};
