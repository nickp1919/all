const isBoolean = <T>(arg: T | boolean): arg is boolean => arg === !!arg;

export default isBoolean;
