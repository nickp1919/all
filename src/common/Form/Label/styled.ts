import styled from 'styled-components';
import css from '@styled-system/css';

import { BoxBlock } from '@modules';

import { AlignCenter, Wrap, FontType } from '@globalStyled';

import { IBoxProps } from '@types';

export const StyledLabel = styled(BoxBlock)<IBoxProps>`
  ${AlignCenter}
  ${Wrap}
  ${FontType.default.fontWeight}
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05px;
  cursor: pointer;

  & > span svg {
    flex: 0 0 20px;
  }
`;
