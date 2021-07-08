import styled from 'styled-components';
import css from '@styled-system/css';
import { BoxBlock } from "..";
import { JSEnd } from "../../globalStyled";
export const ModalBlockWrapperDiv = styled(BoxBlock) ``;
export const ModalButtonsWrapperDiv = styled(BoxBlock) `
  ${JSEnd}
  ${css({ mt: 8 })}
  
  & > button {
    ${css({ ml: 4 })}
  }
`;
