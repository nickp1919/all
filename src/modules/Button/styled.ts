import styled from 'styled-components';

import { Button } from '@pulse/ui/components/Button';
import { ButtonVariants } from '@pulse/ui/components/Button/types';

import { COLORS } from '@typography';
import { BUTTON_EXTRA_TYPE } from '@constants';

import { ExtraType } from './types';

const { TEXT_BUTTON, CANCEL_BUTTON, WARNING_BUTTON } = BUTTON_EXTRA_TYPE;

export const StyledButton = styled(Button)<{ extraType?: ExtraType } & ButtonVariants>`
  white-space: nowrap;
  box-shadow: none !important;

  ${({ extraType }) => {
    if (extraType === TEXT_BUTTON) {
      return `
       ${commonStyles}
       color: ${COLORS.textAction};
      
       &:hover, 
       &:focus, 
       &:active {
        color: ${COLORS.textAction};
       }
    `;
    }
    if (extraType === CANCEL_BUTTON) {
      return `
       ${commonStyles}
       color: ${COLORS.grays.text};
       
       &:hover, 
       &:focus, 
       &:active {
        color: ${COLORS.grays.text};
       }
    `;
    }
    if (extraType === WARNING_BUTTON) {
      return `
       ${commonStyles}
       color: ${COLORS.error};
       
       &:hover, 
       &:focus, 
       &:active {
        color: ${COLORS.error};
       }
    `;
    }
  }};
`;

const commonStyles = `
  background-color: transparent;
  border-color: transparent;
  padding: 0 2px 0;
  height: auto;
     
  &:hover, 
  &:focus, 
  &:active {
    background-color: transparent;
  }
`;
