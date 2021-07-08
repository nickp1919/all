import React from 'react';

import { isArrayCount } from '@utils-lib';

import { DefaultWrapperDiv, SpaceBetweenWrapperDiv } from './styled';

import { UIAdaptiveProps, TVariants } from './types';

const VARIANTS: TVariants = {
  default: DefaultWrapperDiv,
  spaceBetween: SpaceBetweenWrapperDiv,
};

export const UIAdaptive = React.forwardRef(
  ({ children, options, breakpoints, type = 'default', indents = true }: UIAdaptiveProps, ref) => {
    const { colInit, widthBlocks } = options;

    if (colInit !== isArrayCount(widthBlocks)) {
      console.error('incorrectly specified block width in UIAdaptive');

      return null;
    }

    const Wrapper = VARIANTS[type];

    return (
      <Wrapper
        options={options}
        breakpoints={breakpoints}
        indents={indents}
        ref={ref}
        className="assessment-adaptive-wrapper"
      >
        {children}
      </Wrapper>
    );
  }
);
