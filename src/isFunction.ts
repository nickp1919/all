export const isFunction = <T extends Function>(obj: T) => {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};
