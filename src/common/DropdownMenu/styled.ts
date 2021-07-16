import styled from 'styled-components';
import css from '@styled-system/css';

import { BoxBlock } from '@modules';
import { AlignCenter, colors, JustifyCenter } from '@globalStyled';

export const DropdownMenuWrapDiv = styled(BoxBlock)`
  position: relative;
`;

export const DropdownMenuDotsDiv = styled(BoxBlock)<{ active: boolean }>`
  ${AlignCenter}
  ${JustifyCenter}
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 8px;

  ${({ active }) => active && `background-color: ${colors.grays.border}`}
`;

export const DropdownMenuDotI = styled.i`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: ${colors.black};

  ${css({
    marginRight: 1,
  })}

  &:last-of-type {
    ${css({
      marginRight: 0,
    })}
  }
`;
