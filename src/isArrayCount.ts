export const isArrayCount = <T>(array: T) => {
  if (Array.isArray(array)) {
    return array.length;
  }

  return 0;
};
