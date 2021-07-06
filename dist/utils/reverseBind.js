const reverseBind = (fn, ...rest) => (value) => fn(value, ...rest);
export default reverseBind;
