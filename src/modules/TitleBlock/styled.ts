import styled from 'styled-components';
import css from '@styled-system/css';

import { ReactComponent as PlusCircle } from '@assets-lib/plus-circle.svg';

import { colors } from '@globalStyled-lib';

export const PlusCircleIconSVG = styled(PlusCircle)<{
  iconsize: { width: number; height: number };
}>`
  ${css({ ml: 3 })}
  display: block;
  ${({ iconsize }) => iconsize}
  fill: ${colors.textAction};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
