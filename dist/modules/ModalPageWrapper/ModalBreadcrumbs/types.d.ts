export interface ModalBreadcrumbsProps {
    breadcrumbs: TBreadcrumb[];
}
export declare type TBreadcrumb = {
    breadcrumb: string;
    onClick?: () => void;
};
