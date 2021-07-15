import React from 'react';

import { Action } from '@pulse/ui/components/Title/Action';

import { TITLE_SIZE } from '@globalStyled-lib';

import { ActionBlockProps } from './types';

const ActionBlock = React.forwardRef<HTMLDivElement, ActionBlockProps>((props, ref) => {
  const { size = TITLE_SIZE.H1, children, onClick } = props;

  return (
    <Action $size={size} ref={ref} onClick={onClick}>
      {children}
    </Action>
  );
});

export default ActionBlock;
