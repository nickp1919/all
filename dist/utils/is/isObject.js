import { isNull } from "..";
export const isObject = (value) => {
    return !isNull(value) && typeof value === 'object';
};
export default isObject;
