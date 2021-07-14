import classNames from 'classnames';
import React, { PureComponent } from 'react';

import { BoxBlock, SpinnerModule } from '@modules-lib';

import { ISkeletonProps } from './types';

export default class Skeleton extends PureComponent<ISkeletonProps> {
  render() {
    const { children, loaded, className, skeleton } = this.props;

    if (!loaded) {
      if (!skeleton) {
        return <SpinnerModule />;
      }

      return <BoxBlock className={classNames('skeleton', className)}>{skeleton}</BoxBlock>;
    }

    return children;
  }
}
