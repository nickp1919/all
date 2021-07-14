import styled from 'styled-components';
import css from '@styled-system/css';

import { BoxBlock, TextBlock } from '@modules-lib';

import { AJCenter, colors } from '@globalStyled-lib';
import { IBoxProps } from '@types-lib';

export const StubWrapDiv = styled(BoxBlock)`
  ${AJCenter}
  flex-direction: column;
  width: 100%;
  ${css({ mt: 100 })}
`;

export const StubContentDiv = styled(BoxBlock)`
  ${css({ mt: 6 })}
  ${AJCenter}
  flex-direction: column;
  text-align: center;
  & > h2 {
    ${css({ mb: 4 })}
  }
`;

export const StubTextBlock = styled(TextBlock)<IBoxProps>`
  color: ${colors.grays.text};
  ${css({ mt: 4 })}
`;
