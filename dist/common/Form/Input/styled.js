import styled from 'styled-components';
import css from '@styled-system/css';
import { BoxBlock } from "../../../modules";
import { BorderBox, colors, FontType, BorderRadius } from "../../../globalStyled";
export const InputWrapperDiv = styled(BoxBlock) `
  width: 100%;

  input {
    ${css({ py: 0, px: 4 })}
    ${BorderBox}
    border: ${({ required }) => required ? `1px solid ${colors.error} !important` : `1px solid ${colors.grays.border}`};
    height: 38px;
    line-height: 38px;
    ${BorderRadius.small}
    color: ${colors.black};
    width: 100%;
    font-size: 14px;
    font-family: ${FontType.default.fontFamily};

    :focus {
      outline: none;
      border-color: ${colors.black};
    }
    ::placeholder {
      color: ${colors.grays.text};
    }
  }

  div {
    ${css({ mb: '10px' })}
    color: ${colors.grays.text};
    font-size: 14px;
    line-height: 18px;
  }
`;
