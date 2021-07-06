const isNumber = <T>(field: T | number): field is number => typeof field === 'number';

export default isNumber;
