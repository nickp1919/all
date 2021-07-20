import styled from 'styled-components';

import { BoxBlock, TextBlock } from '@modules';

import { colors } from '@globalStyled';

import { IBoxProps } from '@types';

export const ErrorFieldHelpWrapperDiv = styled(BoxBlock)`
  width: 100%;

  input {
    opacity: 0;
    position: absolute;
    left: -99999px;
  }
`;
export const ErrorTextBlock = styled(TextBlock)<IBoxProps>`
  color: ${colors.error};
`;
