import format from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';

const getDateFormatText = (date: string, formatType = 'd MMMM yyyy') => {
  return date && format(new Date(date), formatType, { locale: ruLocale });
};

export default getDateFormatText;
