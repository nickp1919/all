export declare enum Success {
    Success = "--------------------------"
}
export declare enum Common {
    Error = "[Error] --------------------------"
}
export declare type ShowErrorMessageType = {
    message: {
        stackTrace: string;
        text: string;
    };
    code: number;
};
/** Отправляем сообщение об ошибке
 @param error - объект ошибки. Из него вытаскиваем код и по коду устанавливаем сообщение
 */
export declare const showErrorMessage: (error: ShowErrorMessageType) => {
    type: Common;
};
