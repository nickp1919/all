import { colors, pulseTypography } from "./typography";
import { FontPropType } from "./types";
import { Size } from '@pulse/ui/components/Title/types';
import { Flex, AlignCenter, AlignBaseline, AlignTop, JustifyTopStart, AJCenter, JustifyCenter, JSBetween, JSCenterBetween, JSEnd, WBlur, TextLink, SeparatorDiv, HiddenDiv, Grid, BorderBox, InlineBlock, Wrap, HideBlock, BodyDiv } from "./css/technicalStyle";
export { colors, pulseTypography, Flex, AlignCenter, AlignBaseline, AlignTop, JustifyTopStart, AJCenter, JustifyCenter, JSBetween, JSCenterBetween, JSEnd, WBlur, TextLink, SeparatorDiv, HiddenDiv, Grid, BorderBox, InlineBlock, Wrap, HideBlock, BodyDiv, };
export declare const BorderRadius: {
    default: {
        borderRadius: number;
    };
    small: {
        borderRadius: number;
    };
    medium: {
        borderRadius: number;
    };
    large: {
        borderRadius: number;
    };
    xlarge: {
        borderRadius: number;
    };
    circle: {
        borderRadius: string;
    };
};
export declare const IconsSizes: {
    smallest: {
        width: number;
        height: number;
    };
    xsmall: {
        width: number;
        height: number;
    };
    small: {
        width: number;
        height: number;
    };
    medium: {
        width: number;
        height: number;
    };
    xmedium: {
        width: number;
        height: number;
    };
    large: {
        width: number;
        height: number;
    };
};
export declare const FontType: FontPropType;
export declare const SectionMargin: {
    default: {
        marginBottom: string;
        marginTop: string;
    };
};
export declare const BoxShadow: {
    small04: {
        boxShadow: string;
    };
    small1: {
        boxShadow: string;
    };
    small2: {
        boxShadow: string;
    };
    medium06: {
        boxShadow: string;
    };
    medium08: {
        boxShadow: string;
    };
    large04: {
        boxShadow: string;
    };
};
export declare function setPropertyOnMouseEvent(property: string): string;
export declare const FONT_VARIANTS: {
    h1Bold: string;
    h2Semibold: string;
    h3Semibold: string;
    extraBodyRegular: string;
    h4Semibold: string;
    body1Regular: string;
    body1Semibold: string;
    body2ParagraphRegular: string;
    body2Regular: string;
    body2Semibold: string;
    captionParagraphRegular: string;
    captionRegular: string;
    captionSemibold: string;
    caption2Regular: string;
    caption2Semibold: string;
    tabBarMedium: string;
    smallTextRegular: string;
    smallTextSemibold: string;
};
export declare const TITLE_SIZE: {
    [key: string]: Size;
};
export declare const EmojiDiv: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MODAL_WIDTH: {
    small: string;
    medium: string;
};
export declare const DividerDiv: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const spaceTheme: number[];
import notificationStyle from "./css/notificationStyle";
import modalStyle from "./css/modalStyle";
import tooltipStyle from "./css/tooltipStyle";
import { UIAdaptiveCol, gridCol } from "./css/methods";
export { notificationStyle, modalStyle, tooltipStyle, UIAdaptiveCol, gridCol };
