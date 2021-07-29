import styled from 'styled-components';
import css from '@styled-system/css';
import { Header } from '@pulse/ui/components/Modal';
import { BoxBlock } from "..";
import { JSBetween, JSEnd, AlignCenter } from "../../globalStyled";
export const ModalPageWrapperHeader = styled(Header) `
  ${JSBetween}
  ${AlignCenter}
  ${css({
    pl: 4,
    pr: 2,
    py: '7px',
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
