import React from 'react';
import PhotoListRadio from './PhotoListRadio/PhotoListRadio';
import { FONT_VARIANTS } from "../../../globalStyled";
import { isUndefined, getRandomString } from "../../../utils";
import { renderMark } from "../Radio/Radio";
import { Radio } from "../Radio";
import { RadioText, RadioWrapperDiv, RadioWrapperInnerDiv, RadioTextBlockDiv, } from "../Radio/styled";
const { body1Regular } = FONT_VARIANTS;
export default class RadioImg extends Radio {
    constructor() {
        super(...arguments);
        this.$inputRef = React.createRef();
    }
    onClick() {
        var _a, _b;
        if (this.$inputRef) {
            (_b = (_a = this.$inputRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.click();
        }
    }
    render() {
        var _a, _b;
        const { props: { name, value, label, checked, withContext, img }, context: { fields }, } = this;
        let formValueImg = '';
        let error = '';
        if (withContext) {
            formValueImg = !fields[name] ? '' : fields[name].value;
            error = !fields[name] ? '' : (_b = (_a = fields[name]) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.errorMessage;
        }
        const checkedInit = isUndefined(checked) ? formValueImg === value : checked;
        return (React.createElement(RadioWrapperDiv, null,
            React.createElement(RadioWrapperInnerDiv, null,
                renderMark({
                    error,
                    checked: checkedInit,
                    onClick: () => {
                        this.onClick();
                    },
                }),
                React.createElement("input", { type: "radio", name: name, value: value || '', checked: checkedInit, onChange: ({ currentTarget }) => {
                        this.onChange({ value: currentTarget.value });
                    }, ref: this.$inputRef }),
                React.createElement(RadioTextBlockDiv, null,
                    label && (React.createElement(RadioText, { forwardedAs: "div", variant: body1Regular },
                        React.createElement("span", { onClick: () => {
                                this.onClick();
                            } }, label))),
                    img && (React.createElement(PhotoListRadio, { photos: [
                            {
                                link: img,
                                id: getRandomString(),
                                createTime: '',
                                name: '',
                            },
                        ], checked: checkedInit, onClick: () => {
                            this.onClick();
                        } }))))));
    }
}
