const isFunction = (obj) => !!(obj && obj.constructor && obj.apply);
export default isFunction;
