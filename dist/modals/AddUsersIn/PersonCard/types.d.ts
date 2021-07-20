import { CSSProperties, ReactNode } from 'react';
interface IAvatarProps {
    firstName?: string;
    lastName?: string;
    style?: CSSProperties;
    className?: string;
    size?: 'large' | 'small' | 'default' | number;
    src?: string;
    srcSet?: string;
    children?: ReactNode;
    alt?: string;
    onError?: () => boolean;
    text?: string;
    extraIcon?: ReactNode;
    withSubordinates?: boolean;
    withSubordinatesVertical?: boolean;
}
export interface IPersonCardProps {
    me?: boolean;
    className?: string;
    firstName?: string;
    lastName?: string;
    position?: string;
    onClick?: Function;
    rightSlot?: JSX.Element;
    avatarIcon?: JSX.Element;
    avatarSize?: IAvatarProps['size'];
    fullNamePrefix?: JSX.Element;
    fullNamePostfix?: JSX.Element;
    isAnonymous?: boolean;
    removeChoose?: boolean;
    photoUrl?: string;
    userId: string;
    title?: string;
    removeChooseShow?: boolean;
    isFixed?: boolean;
    addChoosePerson: Function;
    removeChoosePerson: Function;
}
export {};
