import styled from 'styled-components';
import css from '@styled-system/css';

import { BoxBlock } from '@modules';

import { colors, BorderRadius } from '@globalStyled';

export const RadioWrapperDiv = styled(BoxBlock)`
  position: relative;
  min-width: 20px;

  input {
    opacity: 0;
    position: absolute;
  }
`;

export const TextAreaDiv = styled(BoxBlock)`
  ${css({ mt: 6, mr: 0, mb: 0, ml: 3 })}

  textarea {
    border: 1px solid ${colors.grays.border};
    background-color: ${colors.white};
    ${BorderRadius.small}
    color: black;
    width: 280px;
    height: 100px;
    padding: 7px 10px;
    font-size: 16px;
    overflow: auto;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: ${colors.grays.text};
    }
  }

  div {
    ${css({ m: 0 })}
  }
`;
