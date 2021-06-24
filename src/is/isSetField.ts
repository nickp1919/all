import { isUndefined, isNull } from '../';

const isSetField = <T>(val: T) => {
  if (isUndefined(val)) {
    return false;
  }

  return !isNull(val);
};

export default isSetField;
