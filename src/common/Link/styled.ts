import styled from 'styled-components';

import { TextBlock } from '@modules-lib';

import { colors, InlineBlock } from '@globalStyled-lib';

export const LinkWrapDiv = styled(TextBlock)`
  ${InlineBlock}
  color: ${colors.textAction};
  cursor: pointer;
`;
