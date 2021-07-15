import styled from 'styled-components';
import { TextBlock } from "../../modules";
import { colors, InlineBlock } from "../../globalStyled";
export const LinkWrapDiv = styled(TextBlock) `
  ${InlineBlock}
  color: ${colors.textAction};
  cursor: pointer;
`;
