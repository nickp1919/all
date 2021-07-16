import styled from 'styled-components';
import css from '@styled-system/css';

import { BoxBlock } from '@modules';

import { AlignCenter, colors } from '@globalStyled';

export const TooltipWrapperDiv = styled(BoxBlock)<{ width: string }>`
  max-width: ${({ width }) => width};
  color: ${colors.tertiary};

  h3 {
    color: ${colors.white};
    font-size: 14px;
    line-height: 18px;
  }
`;

export const InfoIconDiv = styled(BoxBlock)<{ height?: string }>`
  ${AlignCenter}
  cursor: pointer;
  width: 18px;
  height: ${({ height }) => (height ? height : '19px')};

  ${css({ ml: 2 })}
`;
