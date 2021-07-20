import styled from 'styled-components';
import css from '@styled-system/css';

import { BoxBlock, Button, TextBlock } from '@modules';

import { colors, JSEnd, MODAL_WIDTH } from '@globalStyled';

export const ConfirmModalDiv = styled(BoxBlock)`
  ${MODAL_WIDTH.small}
`;

export const ConfirmModalActions = styled(BoxBlock)`
  ${css({ px: 6, pb: 6 })}
  ${JSEnd}
`;

export const ConfirmModalConfirmButton = styled(Button)`
  ${css({ ml: 4 })}
`;

export const ConfirmText = styled(TextBlock)`
  ${css({ mt: 6 })};
  line-height: 20px;
  color: ${colors.grays.text};
`;
