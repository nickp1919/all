import styled from 'styled-components';

import { Button } from '@pulse/ui/components/Button';
import { ButtonVariants } from '@pulse/ui/components/Button/types';

import { colors } from '@typography';
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
       color: ${colors.textAction};
      
       &:hover, 
       &:focus, 
       &:active {
        color: ${colors.textAction};
       }
    `;
    }
    if (extraType === CANCEL_BUTTON) {
      return `
       ${commonStyles}
       color: ${colors.grays.text};
       
       &:hover, 
       &:focus, 
       &:active {
        color: ${colors.grays.text};
       }
    `;
    }
    if (extraType === WARNING_BUTTON) {
      return `
       ${commonStyles}
       color: ${colors.error};
       
       &:hover, 
       &:focus, 
       &:active {
        color: ${colors.error};
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
