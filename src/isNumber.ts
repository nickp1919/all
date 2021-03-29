export const isNumber = <T>(field: T | number): field is number => {
  return typeof field === 'number';
};
