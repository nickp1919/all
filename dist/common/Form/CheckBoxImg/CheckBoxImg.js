import React from 'react';
import { FORM } from "../../../constants";
const { FORM_DISABLED_STATE } = FORM;
import { getRandomString, isUndefined } from "../../../utils";
import { renderMark } from "../CheckBox/CheckBox";
import { CheckBox } from "../CheckBox";
import { CheckboxWrapperDiv, CheckboxWrapperInnerDiv, CheckboxText, CheckboxInfoText, CheckboxTextBlockDiv, } from "../CheckBox/styled";
import PhotoListRadio from "../RadioImg/PhotoListRadio/PhotoListRadio";
export default class CheckBoxImg extends CheckBox {
    constructor() {
        super(...arguments);
        this.$inputRef = React.createRef();
    }
    render() {
        var _a, _b;
        const { props: { name, disabled, label, text, id, checked: Checked, withContext, img }, context: { fields, disabled: formDisable }, } = this;
        let checkedImg = false;
        let error = '';
        if (withContext) {
            checkedImg = !fields[name] ? false : !!fields[name].value;
            error = !fields[name] ? '' : (_b = (_a = fields[name]) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.errorMessage;
        }
        const checkedInit = isUndefined(Checked) ? checkedImg : Checked;
        return (React.createElement(CheckboxWrapperDiv, { onKeyPress: this.onEnterPress },
            React.createElement(CheckboxWrapperInnerDiv, null,
                renderMark({
                    error,
                    checked: checkedInit,
                    onClick: () => {
                        this.onClick();
                    },
                }),
                React.createElement("input", { type: "checkbox", id: id || name, name: name, disabled: disabled || formDisable === FORM_DISABLED_STATE.FORM, checked: checkedInit, onChange: ({ currentTarget }) => this.onChange(currentTarget.checked), ref: this.$inputRef }),
                React.createElement(CheckboxTextBlockDiv, null,
                    label && (React.createElement(CheckboxText, { forwardedAs: "span", variant: "subheadline" },
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
                        } }))),
                text && (React.createElement(CheckboxInfoText, { forwardedAs: "p", variant: "footnote" },
                    React.createElement("span", { onClick: () => {
                            this.onClick();
                        } }, text))))));
    }
}
