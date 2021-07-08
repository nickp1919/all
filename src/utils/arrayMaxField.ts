import { isArrayCount } from '@utils-lib';

const arrayMaxField = (arr: any, field?: string) => {
  if (!isArrayCount(arr)) {
    return 0;
  }

  let len = arr.length;
  let max = 0;

  while (len--) {
    const number = field ? Number(arr[len][field]) : Number(arr[len]);

    if (number > max) {
      max = number;
    }
  }

  return max;
};

export default arrayMaxField;
