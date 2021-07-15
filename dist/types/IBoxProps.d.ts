import { ResponsiveStyleValue, SystemStyleObject } from '@styled-system/css';
import React from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';
import * as StyledSystem from 'styled-system';
import { Theme } from '@pulse/ui/theme';
interface IBaseProps extends React.RefAttributes<any> {
    as?: React.ElementType;
    css?: CSSObject | FlattenSimpleInterpolation | string;
    theme?: Theme;
}
/**
 * The `SxStyleProp` extension `SystemStyleObject`
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
declare type TSxStyleProp = SystemStyleObject | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string> | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>>;
interface ISxProps {
    /**
     * The sx prop lets you style elements inline, using values from your theme.
     */
    sx?: TSxStyleProp;
    __css?: TSxStyleProp;
}
interface IBoxKnownProps extends IBaseProps, StyledSystem.SpaceProps, StyledSystem.LayoutProps, StyledSystem.FontSizeProps, StyledSystem.ColorProps, StyledSystem.FlexProps, StyledSystem.OrderProps, StyledSystem.AlignSelfProps, ISxProps {
    variant?: StyledSystem.ResponsiveValue<string>;
    tx?: string;
}
export interface IBoxProps extends IBoxKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof IBoxKnownProps> {
}
export {};
