import { declOfNum } from "./";
export const secondsToHours = (time) => {
    let result = '';
    if (time < 3600) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        if (minutes) {
            result = minutes + ' ' + declOfNum(+minutes, ['минута', 'минуты', 'минут']);
        }
        if (seconds) {
            result += ' ' + seconds + ' ' + declOfNum(+seconds, ['секунда', 'секунды', 'секунд']);
        }
    }
    else {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time - hours * 3600) / 60);
        if (hours) {
            result = hours + ' ' + declOfNum(+hours, ['час', 'часа', 'часов']);
        }
        if (minutes) {
            result += ' ' + minutes + ' ' + declOfNum(+minutes, ['минута', 'минуты', 'минут']);
        }
    }
    return result;
};
export default secondsToHours;
