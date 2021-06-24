const declOfNum = (number: number | string, titles: string[]) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const _number = Number(number);

  return titles[
    _number % 100 > 4 && _number % 100 < 20 ? 2 : cases[_number % 10 < 5 ? _number % 10 : 5]
  ];
};

export default declOfNum;
