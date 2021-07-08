import styled from 'styled-components';
import css from '@styled-system/css';
import { ReactComponent as CloseSvg } from './icon/close.svg';

import { BoxBlock } from '@modules-lib';

import { AJCenter, BorderRadius, BoxShadow, colors, JSBetween } from '@globalStyled-lib';

export const ModalWrapperDiv = styled(BoxBlock)`
  z-index: 2;
  background: ${colors.white};
  ${BoxShadow.medium08}
  ${BorderRadius.medium};
  min-width: 300px;
  ${css({ p: 6 })}
  position: relative;
`;

export const OverlayStyled = styled(BoxBlock)`
  ${AJCenter}
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.15);
  z-index: 200;
`;

export const ModalCloseDiv = styled(BoxBlock)`
  ${JSBetween}
`;

export const ModalCloseSvg = styled(CloseSvg)`
  ${css({ p: '6px' })}
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  background-color: transparent;
  color: ${colors.grays.text};

  &:hover {
    background-color: ${colors.buttonSecondaryHover};
  }
`;
