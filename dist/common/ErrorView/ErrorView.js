import React from 'react';
import { WrapperDiv } from './styles';
export const ErrorView = ({ error }) => {
    return React.createElement(WrapperDiv, null,
        "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430: ", error === null || error === void 0 ? void 0 :
        error.message,
        " ");
};
