/** Функция сокращения длинных имен
 * @param text - строка, которую нужно сократить
 * @param n - количество видимых символов
 * @param symbol - символ, который нужно поставить в конце строки */
declare const getShortName: (text: string, n?: number, symbol?: string) => string;
export default getShortName;
