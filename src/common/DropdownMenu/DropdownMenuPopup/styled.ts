import styled from 'styled-components';
import css from '@styled-system/css';

import { colors } from '@globalStyled-lib';

export const PopupWrapList = styled.ul`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  background-color: ${colors.white};
  list-style-type: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  border: 1px solid ${colors.grays.border};
  white-space: nowrap;
  z-index: 10;

  ${css({
    margin: 0,
    paddingTop: 1,
    paddingBottom: 1,
  })};
`;
