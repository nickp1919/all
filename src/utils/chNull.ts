import { isNull, isUndefined } from '@utils-lib';

export const chNull = <T>(field: T, extra?: string | number) => {
  if (!isUndefined(extra)) {
    return `${isNull(field) ? extra : field}`;
  }

  return `${isNull(field) ? '' : field}`;
};

export default chNull;
