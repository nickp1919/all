import css from '@styled-system/css';
import styled from 'styled-components';

import { ReactComponent as CheckedMark } from '@assets/form-icons/check-checkbox.svg';

import { BoxBlock, TextBlock } from '@modules';

import { AlignCenter, colors, Flex } from '@globalStyled';

import { IBoxProps } from '@types';

export const StyledContentContainerDiv = styled(BoxBlock)`
  ${Flex}
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  ${css({
    ml: 3,
  })}
`;

export const StyledPersonCardLabel = styled.div<{ isFixed?: boolean }>`
  ${AlignCenter}
  width: 100%;
  display: grid;
  grid-template-columns: 30px 40px auto;

  //pointer-events: ${({ isFixed }) => (isFixed ? 'none' : 'inherit')};
  //cursor: pointer;
`;

export const StyledFullNameText = styled(TextBlock)<IBoxProps>``;

export const CheckedMarkSVG = styled(CheckedMark)<{ isfixed?: string }>`
  height: 21px;
  flex: 0 0 20px;
  opacity: ${({ isfixed }) => (isfixed ? '0.3' : '1')};
`;

export const PersonCardCheckBoxDiv = styled(BoxBlock)`
  ${css({ mr: 3 })}
`;

export const PositionTextBlock = styled(TextBlock)`
  color: ${colors.grays.text};
`;
