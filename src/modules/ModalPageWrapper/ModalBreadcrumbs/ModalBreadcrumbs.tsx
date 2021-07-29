import React, { FC } from 'react';

import { Breadcrumbs, Breadcrumb, Delimiter } from '@pulse/ui/components/Breadcrumbs';

import { ModalBreadcrumbsProps } from './types';

export const ModalBreadcrumbs: FC<ModalBreadcrumbsProps> = ({ breadcrumbs, ...rest }) => {
  const renderBreadcrumbs = () =>
    breadcrumbs.map(({ breadcrumb, onClick }, idx) => {
      if (idx === breadcrumbs.length - 1) {
        return (
          <>
            <Breadcrumb>
              <span>{breadcrumb}</span>
            </Breadcrumb>
          </>
        );
      }
      return (
        <>
          <Breadcrumb>
            <a onClick={() => onClick && onClick()}>{breadcrumb}</a>
            <Delimiter>/</Delimiter>
          </Breadcrumb>
        </>
      );
    });

  return <Breadcrumbs {...rest}>{breadcrumbs.length > 1 && renderBreadcrumbs()}</Breadcrumbs>;
};
