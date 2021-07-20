import styled from 'styled-components';
import css from '@styled-system/css';
import { BoxBlock, TextBlock } from "../../modules";
import { colors, MODAL_WIDTH } from "../../globalStyled";
export const DeleteQuestionDiv = styled(BoxBlock) `
  ${MODAL_WIDTH.small}
`;
export const DeleteBlockText = styled(TextBlock) `
  ${css({ mt: 6 })}
  line-height: 20px;
  color: ${colors.grays.text};
`;
export const DeleteBlockTitle = styled(TextBlock) `
  ${css({ mt: 0 })}
`;
