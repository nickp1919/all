import React from 'react';

export type TMoreButtonBlock = {
  children: React.ReactNode;
  onClick: () => void;
  opened?: boolean;
};
