import { isUndefined, isNull } from '../';
const isSetField = (val) => {
    if (isUndefined(val)) {
        return false;
    }
    return !isNull(val);
};
export default isSetField;
