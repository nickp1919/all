import styled from 'styled-components';
import css from '@styled-system/css';

import { BoxBlock, TextBlock } from '@modules';

import { colors, Flex } from '@globalStyled';

import { IBoxProps } from '@types';

export const CheckboxWrapperDiv = styled(BoxBlock)`
  position: relative;
  min-width: 20px;

  input {
    opacity: 0;
    position: absolute;
    left: -999999px;
  }
`;

export const CheckboxWrapperInnerDiv = styled(BoxBlock)`
  ${Flex}
  flex-wrap: nowrap;

  & > span svg {
    height: 21px;
    flex: 0 0 20px;
  }
`;

export const CheckboxText = styled(TextBlock)<IBoxProps>``;

export const CheckboxInfoText = styled(TextBlock)<IBoxProps>`
  color: ${colors.grays.text};

  && {
    ${css({ mt: '9px', mr: 0, mb: 0, ml: '33px' })}
    flex: 1 1 100%;
  }
`;

export const CheckboxTextBlockDiv = styled(BoxBlock)<IBoxProps>`
  cursor: pointer;
  ${css({ ml: 3 })}

  @media screen and (min-width: 1920px) {
    width: 70%;
  }
`;

export const CheckboxTextBlockSpan = styled.span`
  cursor: pointer;
`;
