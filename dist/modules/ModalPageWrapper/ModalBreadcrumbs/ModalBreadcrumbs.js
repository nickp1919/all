import React from 'react';
import { Breadcrumbs, Breadcrumb, Delimiter } from '@pulse/ui/components/Breadcrumbs';
export const ModalBreadcrumbs = ({ breadcrumbs, ...rest }) => {
    const renderBreadcrumbs = () => breadcrumbs.map(({ breadcrumb, onClick }, idx) => {
        if (idx === breadcrumbs.length - 1) {
            return (React.createElement(React.Fragment, null,
                React.createElement(Breadcrumb, null,
                    React.createElement("span", null, breadcrumb))));
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(Breadcrumb, null,
                React.createElement("a", { onClick: () => onClick && onClick() }, breadcrumb),
                React.createElement(Delimiter, null, "/"))));
    });
    return React.createElement(Breadcrumbs, { ...rest }, breadcrumbs.length > 1 && renderBreadcrumbs());
};
