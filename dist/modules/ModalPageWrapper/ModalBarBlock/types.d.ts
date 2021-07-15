import { SystemStyleObject } from '@styled-system/css';
import { StyledComponentProps } from 'styled-components';
import { SizeModal } from "../types";
export declare type ActionBarProps = StyledComponentProps<'div', any, {}, never>;
export interface ActionBarStyledProps {
    $isSticky: boolean;
    $size?: SizeModal;
}
export declare type ActionBarSizes = Record<SizeModal, SystemStyleObject>;
