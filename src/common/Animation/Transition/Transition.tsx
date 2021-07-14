import React, { ReactNode } from 'react';
import { Transition } from 'react-transition-group';

import { BoxBlock } from '@modules-lib';

type Props = {
  children: ReactNode;
  animation?: 'opacity' | 'scale' | 'moveLeft' | string;
  appear?: boolean;
  reverse?: boolean;
  durationAppear?: number;
  durationLeave?: number;
};

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: { [id: string]: React.CSSProperties } = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const TransitionBLock = ({ children, reverse }: Props) => {
  return (
    <Transition timeout={duration}>
      {(state) => (
        <BoxBlock
          as="div"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {reverse ? React.Children.toArray(children).reverse() : React.Children.toArray(children)}
        </BoxBlock>
      )}
    </Transition>
  );
};
