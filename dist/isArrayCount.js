export const isArrayCount = (array) => {
    if (Array.isArray(array)) {
        return array.length;
    }
    return 0;
};
