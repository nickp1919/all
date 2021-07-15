import styled from 'styled-components';

import { TextBlock } from '@modules';

import { COLORS, InlineBlock } from '@globalStyled';

export const LinkWrapDiv = styled(TextBlock)`
  ${InlineBlock}
  color: ${COLORS.textAction};
  cursor: pointer;
`;
