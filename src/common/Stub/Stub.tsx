import React from 'react';

import { TextBlock } from '@modules-lib';

import { FONT_VARIANTS } from '@globalStyled-lib';

import { StubWrapDiv, StubContentDiv, StubTextBlock } from './styled';
import { TStubProps } from './types';

const Stub: React.FC<TStubProps> = ({ title, description, icon, extraBodyRegular = false }) => {
  const descriptionFont = extraBodyRegular
    ? FONT_VARIANTS.extraBodyRegular
    : FONT_VARIANTS.body1Regular;

  return (
    <StubWrapDiv>
      {icon}

      <StubContentDiv>
        {title && <TextBlock size={FONT_VARIANTS.h2Semibold}>{title}</TextBlock>}

        <StubTextBlock variant={descriptionFont}>{description}</StubTextBlock>
      </StubContentDiv>
    </StubWrapDiv>
  );
};

export default Stub;
