import { isUndefined, isNull } from '@utils';

const isSetField = <T>(val: T) => {
  if (isUndefined(val)) {
    return false;
  }

  return !isNull(val);
};

export default isSetField;
