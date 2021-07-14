import { SystemStyleObject } from '@styled-system/css';
import { ReactNode } from 'react';
export declare type ActionButtonProps = {
    $containsOnlyIcon?: boolean;
    onClick: () => void;
    children: ReactNode;
};
export declare type ActionButtonIconVariants = Record<'true' | 'false', SystemStyleObject>;
