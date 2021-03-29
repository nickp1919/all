export const isArray = <T>(array: T): array is T => {
  return Array.isArray(array);
};
