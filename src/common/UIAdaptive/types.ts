import { ReactNode } from 'react';
import { AnyStyledComponent } from 'styled-components';

export type WidthBlocks = Array<string>;

export interface UIAdaptiveOptions {
  colInit: number;
  widthBlocks: WidthBlocks;
  hidden?: {
    mobile?: boolean;
    desktop?: boolean;
  };
  stretch?: {
    out?: boolean;
    in?: boolean;
  };
}

export type UIAdaptiveProps = {
  options: UIAdaptiveOptions;
  children: ReactNode;
  breakpoints?: TBreakpoints;
  type?: string;
  indents?: boolean;
};

export type TVariants = {
  [key: string]: AnyStyledComponent;
};

export type TBreakpoints = {
  [key: number]: {
    col: number;
    widthBlocks?: Array<string>;
    hidden?: boolean;
    stretch?: {
      out?: boolean;
      in?: boolean;
    };
  };
};
