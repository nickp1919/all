const isArrayCount = (array) => {
    if (Array.isArray(array)) {
        return array.length;
    }
    return 0;
};
export default isArrayCount;
