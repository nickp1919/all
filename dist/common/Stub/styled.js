import styled from 'styled-components/macro';
import css from '@styled-system/css';
import { BoxBlock, TextBlock } from "../../modules";
import { AJCenter, colors } from "../../globalStyled";
export const StubWrapDiv = styled(BoxBlock) `
  ${AJCenter}
  flex-direction: column;
  width: 100%;
  ${css({ mt: 100 })}
`;
export const StubContentDiv = styled(BoxBlock) `
  ${css({ mt: 6 })}
  ${AJCenter}
  flex-direction: column;
  text-align: center;
  & > h2 {
    ${css({ mb: 4 })}
  }
`;
export const StubTextBlock = styled(TextBlock) `
  color: ${colors.grays.text};
  ${css({ mt: 4 })}
`;
