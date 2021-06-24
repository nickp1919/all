const isString = <T>(value: T | string): value is string => {
  return typeof value === 'string';
};

export default isString;
