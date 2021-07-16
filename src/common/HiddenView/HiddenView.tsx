import React, { FC } from 'react';

import { ReactComponent as GlassesSvg } from '@assets/glasses.svg';

import { FONT_VARIANTS } from '@globalStyled';

import {
  HiddenViewResultDiv,
  HiddenViewResultInnerDiv,
  HiddenViewResultTitle,
  HiddenViewResultText,
} from './styles';
import { HiddenViewProps } from './types';

export const HiddenView: FC<HiddenViewProps> = ({ head, text }) => {
  const { h3Semibold, body1Regular } = FONT_VARIANTS;

  return (
    <HiddenViewResultDiv>
      <HiddenViewResultInnerDiv>
        <GlassesSvg />

        <HiddenViewResultTitle forwardedAs="h2" variant={h3Semibold}>
          {head}
        </HiddenViewResultTitle>

        <HiddenViewResultText forwardedAs="p" variant={body1Regular}>
          {text}
        </HiddenViewResultText>
      </HiddenViewResultInnerDiv>
    </HiddenViewResultDiv>
  );
};
