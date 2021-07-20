import React from 'react';
import { Radio } from "../Radio";
export default class RadioImg extends Radio {
    $inputRef: React.RefObject<HTMLInputElement>;
    onClick(): void;
    render(): JSX.Element;
}
