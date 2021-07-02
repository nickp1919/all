const onlyNumber = (value, length, match) => {
    const _value = String(value);
    if (!_value)
        return _value;
    const onlyNums = _value.replace(/[^\d]/g, '');
    const text = onlyNums.slice(0, length);
    if (match && Number(text) > match) {
        return '100';
    }
    return text;
};
export default onlyNumber;
