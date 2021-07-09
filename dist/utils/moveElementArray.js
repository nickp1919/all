import { isArrayCount } from "./";
function moveElementArray(arr, from, to) {
    if (isArrayCount(arr)) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
    }
}
export default moveElementArray;
