import classNames from 'classnames';
import React, { PureComponent } from 'react';
import { BoxBlock, SpinnerModule } from "../../modules";
export default class Skeleton extends PureComponent {
    render() {
        const { children, loaded, className, skeleton } = this.props;
        if (!loaded) {
            if (!skeleton) {
                return React.createElement(SpinnerModule, null);
            }
            return React.createElement(BoxBlock, { className: classNames('skeleton', className) }, skeleton);
        }
        return children;
    }
}
