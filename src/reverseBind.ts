const reverseBind = (fn: any, ...rest: any) => (value: string) => fn(value, ...rest);

export default reverseBind;
