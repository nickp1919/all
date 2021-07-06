import { format, formatISO, isDate } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import { DATE_FORMAT_SERVER } from '@constants';
import { isNumber, isString } from '@utils';

// Приводит дату в строку в определенном формате
const getDateFormatText = (date: string | Date | number, formatType = 'dd MMM yyyy') => {
  if (date && (isDate(date) || isString(date) || isNumber(date))) {
    const _date = new Date(date);

    if (formatType === DATE_FORMAT_SERVER) {
      return formatISO(_date); // Перевод даты в формат для сервера и датапикера
    } else {
      return format(_date, formatType, { locale: ruLocale });
    }
  } else {
    return '';
  }
};

export default getDateFormatText;
