import { Notificator } from '@modules';
import { createActions } from 'redux-actions';

export enum Success {
  Success = '--------------------------',
}

export enum Common {
  Error = '[Error] --------------------------',
}

createActions({
  [Success.Success]: undefined,
  [Common.Error]: undefined,
});

export type ShowErrorMessageType = {
  message: { stackTrace: string; text: string };
  code: number;
};

/** Отправляем сообщение об ошибке
 @param error - объект ошибки. Из него вытаскиваем код и по коду устанавливаем сообщение
 */
export const showErrorMessage = (error: ShowErrorMessageType) => {
  let text = '';

  if (error?.message?.text) {
    text = error.message.text + ', ';
  }

  if (error?.code) {
    text += 'код ошибки ' + error.code;
  }

  Notificator.error(`${text || 'Неизвестная ошибка, обратитесь к разработчикам'}`);

  return { type: Common.Error };
};
