import styled from 'styled-components';
import css from '@styled-system/css';
import { BoxBlock, TextBlock } from "../../../modules";
import { Flex } from "../../../globalStyled";
export const RadioWrapperDiv = styled(BoxBlock) `
  position: relative;
  min-width: 20px;

  input {
    opacity: 0;
    position: absolute;
    left: -999999px;
  }
`;
export const RadioWrapperInnerDiv = styled(BoxBlock) `
  ${Flex}
  flex-wrap: nowrap;

  & > svg {
    height: 21px;
    flex: 0 0 20px;
  }
`;
export const RadioText = styled(TextBlock) ``;
export const RadioTextBlockDiv = styled(BoxBlock) `
  cursor: pointer;
  ${css({ ml: 3 })}

  @media screen and (min-width: 1920px) {
    width: 70%;
  }
`;
export const RadioTextBlockSpan = styled.span `
  cursor: pointer;
`;
