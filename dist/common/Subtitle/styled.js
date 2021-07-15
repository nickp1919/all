import styled from 'styled-components';
import css from '@styled-system/css';
import { BoxBlock } from "../../modules";
import { AlignCenter, AlignBaseline, colors } from "../../globalStyled";
import { ReactComponent as PlusCircle } from '@assets-lib/plus-circle.svg';
export const SubtitleWrapDiv = styled(BoxBlock) `
  ${css({ mt: 8 })}
  ${AlignCenter};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;
export const SubtitleTextDiv = styled(BoxBlock) `
  ${AlignBaseline};

  & > * {
    margin-bottom: 0;
  }
`;
export const SubtitleCountDiv = styled(BoxBlock) `
  ${css({ ml: 2 })}
  color: ${colors.grays.text};

  & > * {
    margin-bottom: 0;
  }
`;
export const PlusCircleIconSVG = styled(PlusCircle) `
  ${css({ ml: 3 })}
  display: block;
  ${({ iconsize }) => iconsize}
  fill: ${colors.textAction};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
