import { isNull, isUndefined } from "./";
export const chNull = (field, extra) => {
    if (!isUndefined(extra)) {
        return `${isNull(field) ? extra : field}`;
    }
    return `${isNull(field) ? '' : field}`;
};
export default chNull;
