import styled from 'styled-components';
import css from '@styled-system/css';

import { BoxBlock } from '@modules';

import { colors, BorderRadius, FontType } from '@globalStyled';

export const TextareaWrapperDiv = styled(BoxBlock)<{ required?: boolean }>`
  label {
    font-size: 14px;
    line-height: 18px;
    color: ${colors.grays.text};
    display: block;

    ${css({
      marginBottom: 2,
    })}
  }

  textarea {
    font-family: ${FontType.default.fontFamily};
    ${css({ py: 2, px: '11px' })}
    border: ${({ required }) =>
      required ? `1px solid ${colors.error} !important` : `1px solid ${colors.grays.border}`};
    min-height: 110px;
    ${BorderRadius.small}
    color: ${colors.black};
    width: 100%;
    font-size: 14px;
    resize: vertical;

    :focus {
      outline: none;
      border-color: ${colors.black};
    }
    ::placeholder {
      color: ${colors.grays.text};
    }
  }
`;
