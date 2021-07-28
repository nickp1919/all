import { ReactNode } from 'react';

type TIcon = 'glasses' | 'magic';

export type TStubProps = {
  title: ReactNode | string;
  description: ReactNode | string;
  icon?: ReactNode | TIcon;
  extraBodyRegular?: boolean;
};
