import { ReactNode, CSSProperties } from 'react';

export type TLinkProps = {
  children: ReactNode;
  style?: CSSProperties;
  onClick: Function;
};
