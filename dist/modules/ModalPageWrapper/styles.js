import styled from 'styled-components';
import css from '@styled-system/css';
import { BoxBlock } from "..";
import { JSBetween, JSEnd } from "../../globalStyled";
export const ModalPageWrapperHeaderDiv = styled(BoxBlock) `
  ${JSBetween}

  ${css({
    p: '5px',
})}
`;
export const ModalWrapperActionBarDiv = styled(BoxBlock) `
  ${JSEnd}
  position: relative;

  button {
    ${css({
    ml: 4,
})}
  }
`;
