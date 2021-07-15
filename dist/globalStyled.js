import styled from 'styled-components';
import { colors, pulseTypography } from "./typography";
import { Flex, AlignCenter, AlignBaseline, AlignTop, JustifyTopStart, AJCenter, JustifyCenter, JSBetween, JSCenterBetween, JSEnd, WBlur, TextLink, SeparatorDiv, HiddenDiv, Grid, BorderBox, InlineBlock, Wrap, HideBlock, BodyDiv, } from "./css/technicalStyle";
export { colors, pulseTypography, Flex, AlignCenter, AlignBaseline, AlignTop, JustifyTopStart, AJCenter, JustifyCenter, JSBetween, JSCenterBetween, JSEnd, WBlur, TextLink, SeparatorDiv, HiddenDiv, Grid, BorderBox, InlineBlock, Wrap, HideBlock, BodyDiv, };
export const BorderRadius = {
    default: {
        borderRadius: 8,
    },
    small: {
        borderRadius: 4,
    },
    medium: {
        borderRadius: 12,
    },
    large: {
        borderRadius: 20,
    },
    xlarge: {
        borderRadius: 100,
    },
    circle: {
        borderRadius: '50%',
    },
};
export const IconsSizes = {
    smallest: {
        width: 10,
        height: 10,
    },
    xsmall: {
        width: 14,
        height: 14,
    },
    small: {
        width: 22,
        height: 22,
    },
    medium: {
        width: 26,
        height: 26,
    },
    xmedium: {
        width: 64,
        height: 64,
    },
    large: {
        width: 80,
        height: 80,
    },
};
export const FontType = {
    default: {
        fontFamily: 'Helvetica, Arial, sans-serif;',
        variant: 'body2Regular',
        color: 'inherit',
        as: 'div',
        fontWeight: 'font-weight: 400;',
    },
    bold: {
        fontWeight: 'font-weight: bold;',
    },
};
export const SectionMargin = {
    default: {
        marginBottom: '40px',
        marginTop: '40px',
    },
};
export const BoxShadow = {
    small04: {
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.04)',
    },
    small1: {
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
    },
    small2: {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    },
    medium06: {
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.06)',
    },
    medium08: {
        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.08)',
    },
    large04: {
        boxShadow: '0px 16px 40px rgba(0, 0, 0, 0.04)',
    },
};
export function setPropertyOnMouseEvent(property) {
    return `
    &:hover, 
    &:focus, 
    &:active {
    ${property}
  }
`;
}
export const FONT_VARIANTS = {
    h1Bold: 'h1Bold',
    h2Semibold: 'h2Semibold',
    h3Semibold: 'h3Semibold',
    extraBodyRegular: 'extraBodyRegular',
    h4Semibold: 'h4Semibold',
    body1Regular: 'body1Regular',
    body1Semibold: 'body1Semibold',
    body2ParagraphRegular: 'body2ParagraphRegular',
    body2Regular: 'body2Regular',
    body2Semibold: 'body2Semibold',
    captionParagraphRegular: 'captionParagraphRegular',
    captionRegular: 'captionRegular',
    captionSemibold: 'captionSemibold',
    caption2Regular: 'caption2Regular',
    caption2Semibold: 'caption2Semibold',
    tabBarMedium: 'tabBarMedium',
    smallTextRegular: 'smallTextRegular',
    smallTextSemibold: 'smallTextSemibold',
};
export const TITLE_SIZE = {
    H1: 'H1',
    H2: 'H2',
    H3: 'H3',
    subheadline: 'subheadline',
    footnote: 'footnote',
};
export const EmojiDiv = styled.div `
  font-size: 40px;
  line-height: 40px;
`;
export const MODAL_WIDTH = {
    small: 'width: 444px;',
    medium: 'width: 836px;',
};
export const DividerDiv = styled.div `
  width: 100%;
  border-bottom: 1px solid ${colors.grays.separator};
`;
export const spaceTheme = [
    0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84,
];
import notificationStyle from "./css/notificationStyle";
import modalStyle from "./css/modalStyle";
import tooltipStyle from "./css/tooltipStyle";
import { UIAdaptiveCol, gridCol } from "./css/methods";
export { notificationStyle, modalStyle, tooltipStyle, UIAdaptiveCol, gridCol };
