/** Функция сокращения длинных имен
 * @param text - строка, которую нужно сократить
 * @param n - количество видимых символов
 * @param symbol - символ, который нужно поставить в конце строки */

const getShortName = (text: string, n = 20, symbol = '...') => {
  if (!text) {
    return '';
  }

  let result;
  const tmpArr = Array.from(text);

  if (n > tmpArr.length) {
    result = text;
  } else {
    const tmpArr2 = tmpArr.slice(0, n);

    result = `${tmpArr2.join('')}${symbol}`;
  }

  return result;
};

export default getShortName;
