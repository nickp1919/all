const isArray = <T>(array: T): array is T => {
  return Array.isArray(array);
};

export default isArray;
