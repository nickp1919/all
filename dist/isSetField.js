import { isUndefined, isNull } from './index';
export const isSetField = (val) => {
    if (isUndefined(val)) {
        return false;
    }
    return !isNull(val);
};
