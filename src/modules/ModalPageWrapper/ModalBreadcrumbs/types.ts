export interface ModalBreadcrumbsProps {
  breadcrumbs: TBreadcrumb[];
}

export type TBreadcrumb = { breadcrumb: string; onClick?: () => void };
