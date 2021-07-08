import React from 'react';

import { ActionBar } from '@pulse/ui/components/Modal';

import { ActionBarProps } from './types';

export const ModalBarBlock: React.FC<ActionBarProps> = (props) => {
  return <ActionBar {...props}>{props.children}</ActionBar>;
};
