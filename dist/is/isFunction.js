const isFunction = (obj) => !!(obj && obj.constructor && (obj === null || obj === void 0 ? void 0 : obj.call) && obj.apply);
export default isFunction;
