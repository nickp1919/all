import { isNull } from '../index';
export const isObject = (value) => {
    return !isNull(value) && typeof value === 'object';
};
export default isObject;
