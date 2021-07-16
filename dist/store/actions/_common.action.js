import { Notificator } from "../../modules";
import { createActions } from 'redux-actions';
export var Success;
(function (Success) {
    Success["Success"] = "--------------------------";
})(Success || (Success = {}));
export var Common;
(function (Common) {
    Common["Error"] = "[Error] --------------------------";
})(Common || (Common = {}));
createActions({
    [Success.Success]: undefined,
    [Common.Error]: undefined,
});
/** Отправляем сообщение об ошибке
 @param error - объект ошибки. Из него вытаскиваем код и по коду устанавливаем сообщение
 */
export const showErrorMessage = (error) => {
    var _a;
    let text = '';
    if ((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.text) {
        text = error.message.text + ', ';
    }
    if (error === null || error === void 0 ? void 0 : error.code) {
        text += 'код ошибки ' + error.code;
    }
    Notificator.error(`${text || 'Неизвестная ошибка, обратитесь к разработчикам'}`);
    return { type: Common.Error };
};
