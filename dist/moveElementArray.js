function moveElementArray(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
}
export default moveElementArray;
