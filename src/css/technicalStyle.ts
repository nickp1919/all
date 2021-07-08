import styled from 'styled-components';
import css from '@styled-system/css';

import { COLORS } from '@typography-lib';

export const Flex = `
  display: flex;
`;

export const AlignCenter = `
	${Flex}
  align-items: center;
`;

export const AlignBaseline = `
	${Flex}
  align-items: baseline;
`;

export const AlignTop = `
	${Flex}
  align-items: start;
`;

export const JustifyTopStart = `
	${AlignCenter}
  justify-content: start;
`;

export const AJCenter = `
	${AlignCenter}
  justify-content: center;
`;

export const JustifyCenter = `
	${Flex}
  justify-content: center;
`;

export const JSBetween = `
	${Flex}
  justify-content: space-between;
`;

export const JSCenterBetween = `
	${JSBetween}
  align-items: center;
`;

export const JSEnd = `
	${Flex}
  justify-content: flex-end;
`;

export const WBlur = `
	background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(50px);
`;

export const SeparatorDiv = styled.div`
  width: 100%;
  height: 1px;
  background: ${COLORS.grays.border};
`;

export const HiddenDiv = styled.div`
  opacity: 0;
  height: 0;
  width: 0;

  input {
    position: absolute;
    left: -99999999px;
  }
`;

export const BorderBox = `
  box-sizing: border-box;
`;

export const InlineBlock = `
  display: inline-block;
`;

export const HideBlock = `
  display: none;
`;

export const Wrap = `
	flex-wrap: wrap;
`;

export const TextLink = styled.a`
  ${InlineBlock}
  color: ${COLORS.textAction};
`;

export const Grid = `
  display: grid;
  display: -ms-grid;
`;

export const BodyDiv = styled.div`
  ${css({ mt: 6, mb: 13 })}
`;

// export const BodyInnerDiv = styled.div`
//   max-width: 100%;
//
//   @media screen and (min-width: 1920px) {
//     ${css({ my: 0, mx: 'auto' })}
//     max-width: ${MAIN_WIDTH.min1920};
//   }
// `;

// export const ContentInnerDiv = styled.div`
//   max-width: 1368px;
//   margin: 0 auto;
// `;
