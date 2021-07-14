import React from 'react';

export interface ISkeletonProps {
  loaded?: boolean;
  children?: React.ReactNode;
  className?: string;
  skeleton?: React.ReactNode;
}
