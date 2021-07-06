const isNull = <T>(field: T | null): field is null => field === null;

export default isNull;
