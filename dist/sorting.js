import { isArrayCount, isObject, isSetField } from './';
function sortingDirection(SORTING, a, b, variant) {
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
const sorting = ({ array, variant, properties, type, SORTING, }) => {
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
                    return sortingDirection(SORTING, A, B, SORTING.reverse);
                }
                return sortingDirection(SORTING, A, B);
            }
            return 0;
        });
    }
    return array.sort((a, b) => {
        if (variant === SORTING.reverse) {
            return sortingDirection(SORTING, a, b, SORTING.reverse);
        }
        if (type === SORTING.number) {
            return sortingDirection(SORTING, Number(a), Number(b));
        }
        return sortingDirection(SORTING, a, b);
    });
};
export default sorting;
