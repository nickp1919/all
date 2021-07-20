import React from 'react';
import { CheckBox } from "../CheckBox";
export default class CheckBoxImg extends CheckBox {
    $inputRef: React.RefObject<HTMLInputElement>;
    render(): JSX.Element;
}
