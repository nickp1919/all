import { isArrayCount, isObject, isSetField } from "./";
import { SORTING } from "../constants";
function sortingDirection(a, b, variant) {
    if (variant === SORTING.reverse) {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
    }
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
const sorting = ({ array, variant, properties, type, }) => {
    if (!isArrayCount(array)) {
        return [];
    }
    if (properties) {
        return array.sort((a, b) => {
            if (isObject(a) && isSetField(a[properties])) {
                const A = a[properties];
                const B = b[properties];
                if (variant === SORTING.increase) {
                    return A - B;
                }
                if (variant === SORTING.reverse) {
                    return sortingDirection(A, B, SORTING.reverse);
                }
                return sortingDirection(A, B);
            }
            return 0;
        });
    }
    return array.sort((a, b) => {
        if (variant === SORTING.reverse) {
            return sortingDirection(a, b, SORTING.reverse);
        }
        if (type === SORTING.number) {
            return sortingDirection(Number(a), Number(b));
        }
        return sortingDirection(a, b);
    });
};
export default sorting;
