const isFunction = <T extends Function>(obj: T) => !!(obj && obj.constructor && obj?.call && obj.apply);

export default isFunction;
