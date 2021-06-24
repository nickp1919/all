import { declOfNum } from './';
const timeHoursFormat = (time, isShort = false) => {
    let result = '';
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    if (hours) {
        result = hours + ' ' + (isShort ? 'ч' : declOfNum(+hours, ['час', 'часа', 'часов']));
    }
    if (minutes) {
        result +=
            ' ' + minutes + ' ' + (isShort ? 'мин' : declOfNum(+minutes, ['минута', 'минуты', 'минут']));
    }
    return result;
};
export default timeHoursFormat;
