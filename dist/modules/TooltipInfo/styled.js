import styled from 'styled-components';
import css from '@styled-system/css';
import { BoxBlock } from "..";
import { AlignCenter, colors } from "../../globalStyled";
export const TooltipWrapperDiv = styled(BoxBlock) `
  max-width: ${({ width }) => width};
  color: ${colors.tertiary};

  h3 {
    color: ${colors.white};
    font-size: 14px;
    line-height: 18px;
  }
`;
export const InfoIconDiv = styled(BoxBlock) `
  ${AlignCenter}
  cursor: pointer;
  width: 18px;
  height: ${({ height }) => (height ? height : '19px')};

  ${css({ ml: 2 })}
`;
