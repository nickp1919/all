import styled from 'styled-components';

import { ReactComponent as PlusCircle } from '@assets/plus-circle.svg';

import { colors } from '@globalStyled';

export const PlusCircleIconSVG = styled(PlusCircle)<{
  iconsize: { width: number; height: number };
}>`
  display: block;
  ${({ iconsize }) => iconsize}
  fill: ${colors.textAction};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
