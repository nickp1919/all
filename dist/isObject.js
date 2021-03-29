import { isNull } from './isNull';
export const isObject = (value) => {
    return !isNull(value) && typeof value === 'object';
};
