import { isNull } from '@utils';

export const isObject = <T extends object>(value: T): value is T => {
  return !isNull(value) && typeof value === 'object';
};

export default isObject;
