import styled from 'styled-components';
import css from '@styled-system/css';

import { colors } from '@globalStyled-lib';

export const DropdownListItemLi = styled.li`
  cursor: pointer;
  ${css({ py: 3, px: 4 })};

  &:hover {
    background-color: ${colors.grays.background};
  }
`;
