import { SystemStyleObject } from '@styled-system/css';
import { ReactNode } from 'react';

export type ActionButtonProps = {
  $containsOnlyIcon?: boolean;
  onClick: () => void;
  children: ReactNode;
};

export type ActionButtonIconVariants = Record<'true' | 'false', SystemStyleObject>;
