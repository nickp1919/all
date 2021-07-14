import { ReactNode } from 'react';

export type TStubProps = {
  title?: ReactNode | string;
  description?: ReactNode | string;
  icon?: ReactNode | string;
  extraBodyRegular?: boolean;
};
