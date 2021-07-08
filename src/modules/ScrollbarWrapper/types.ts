import { CSSProperties, ReactNode } from 'react';

export type ScrollbarWrapperProps = {
  children: ReactNode;
  height: string | number;
  horizontalStyle?: CSSProperties;
  verticalStyle?: CSSProperties;
  viewStyle?: CSSProperties;
  options?: any; // TODO: any
  ref?: HTMLDivElement;
  style?: CSSProperties;
  HeightMax?: number;
};
