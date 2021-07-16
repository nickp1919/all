import { SystemStyleObject } from '@styled-system/css';
import { StyledComponentProps } from 'styled-components';
import { Size } from '@pulse/ui/components/Modal/types';
export declare type ActionBarProps = StyledComponentProps<'div', any, {}, never>;
export interface ActionBarStyledProps {
    $isSticky: boolean;
    $size?: Size;
}
export declare type ActionBarSizes = Record<Size, SystemStyleObject>;
