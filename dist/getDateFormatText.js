import format from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';
const getDateFormatText = (date, formatType = 'd MMMM yyyy') => {
    return date && format(new Date(date), formatType, { locale: ruLocale });
};
export default getDateFormatText;
