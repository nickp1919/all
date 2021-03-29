import { isUndefined, isNull } from './index';

export const isSetField = <T>(val: T) => {
  if (isUndefined(val)) {
    return false;
  }

  return !isNull(val);
};
