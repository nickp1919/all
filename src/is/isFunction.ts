const isFunction = <T extends Function>(obj: T) => !!(obj && obj.constructor && obj.apply);

export default isFunction;
