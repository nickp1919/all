import styled from 'styled-components';
import { BoxBlock } from "../../../modules";
import { AlignCenter, Wrap, FontType } from "../../../globalStyled";
export const StyledLabel = styled(BoxBlock) `
  ${AlignCenter}
  ${Wrap}
  ${FontType.default.fontWeight}
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05px;
  cursor: pointer;

  & > span svg {
    flex: 0 0 20px;
  }
`;
