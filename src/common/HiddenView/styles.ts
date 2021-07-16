import styled from 'styled-components';
import css from '@styled-system/css';

import { BoxBlock, TextBlock } from '@modules';

import { InlineBlock, JustifyCenter } from '@globalStyled';

import { IBoxProps } from '@types';

export const HiddenViewResultDiv = styled(BoxBlock)`
  ${JustifyCenter}
  ${css({ mt: 10 })}
`;

export const HiddenViewResultInnerDiv = styled(BoxBlock)`
  ${InlineBlock}
  text-align: center;
  max-width: 340px;
`;

export const HiddenViewResultTitle = styled(TextBlock)<IBoxProps>`
  && {
    ${css({ mt: 2 })}
  }
`;

export const HiddenViewResultText = styled(TextBlock)<IBoxProps>`
  && {
    ${css({ mt: 4 })}
  }
`;
