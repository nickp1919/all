import { isArrayCount } from '@utils-lib';

function moveElementArray(arr: any, from: number, to: number) {
  if (isArrayCount(arr)) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
  }
}

export default moveElementArray;
