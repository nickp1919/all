/// <reference types="react" />
declare const _default: {
    FilterBlock: import("react").ForwardRefExoticComponent<{
        state?: import("./FilterBlock/types").State | undefined;
        bgColor?: string | undefined;
        onClick?: any;
        counter: number;
        children: import("react").ReactNode;
    } & import("react").RefAttributes<HTMLAnchorElement>>;
    TagBlock: import("react").ForwardRefExoticComponent<{
        onClick?: (() => void) | undefined;
        size?: import("./TagBlock/types").Size | undefined;
        isActive?: boolean | undefined;
        bgColor?: string | undefined;
        children: import("react").ReactNode;
        style?: any;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").RefAttributes<HTMLAnchorElement>>;
};
export default _default;
