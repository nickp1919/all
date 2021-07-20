import React from 'react';
import { FORM } from "../../../constants";
const { FORM_DISABLED_STATE } = FORM;
import { FONT_VARIANTS } from "../../../globalStyled";
const { body2Regular } = FONT_VARIANTS;
import { ReactComponent as CheckedMark } from "../../../assets/form-icons/check-checkbox.svg";
import { ReactComponent as UncheckedMark } from "../../../assets/form-icons/unchecked-checkbox.svg";
import { ReactComponent as ErrorMark } from "../../../assets/form-icons/error-checkbox.svg";
import { FormContext } from '../Form';
import { isUndefined } from "../../../utils";
import { CheckboxWrapperDiv, CheckboxWrapperInnerDiv, CheckboxText, CheckboxInfoText, CheckboxTextBlockDiv, CheckboxTextBlockSpan, } from './styled';
export function renderMark({ error, checked, onClick, }) {
    let Icon = UncheckedMark;
    if (error) {
        Icon = ErrorMark;
    }
    if (checked) {
        Icon = CheckedMark;
    }
    return (React.createElement(CheckboxTextBlockSpan, { onClick: () => {
            onClick && onClick();
        } },
        React.createElement(Icon, null)));
}
export default class CheckBox extends React.Component {
    constructor() {
        super(...arguments);
        this.$inputRef = React.createRef();
        this.onChange = (currentValue) => {
            const { props: { name, withContext }, context: { onChange: onChangeForm }, } = this;
            const { onChange } = this.props;
            if (onChange) {
                onChange(currentValue, name);
            }
            if (withContext) {
                onChangeForm(name, currentValue);
            }
        };
        //onFocus: (value) =>  = () => {};
        //onBlur: (value) => = () => {};
        this.onEnterPress = (event) => {
            if (event.key === 'Enter') {
                const { fields } = this.context, { name } = this.props;
                this.onChange(!fields[name].value);
            }
        };
    }
    /*constructor(props: CheckboxProps, context: FormContextType) {
      super(props);
  
      const { onBlur, onChange, onFocus } = props;
  
      this.onBlur = onBlur ? reverseBind(onBlur, context) : this.onBlur;
      this.onChange = onChange ? reverseBind(onChange, context) : this.onChange;
      this.onFocus = onFocus ? reverseBind(onFocus, context) : this.onFocus;
    }*/
    componentDidMount() {
        const { props } = this, { withContext } = props;
        if (withContext) {
            const { context: { addField }, } = this;
            addField(props);
        }
    }
    componentWillUnmount() {
        const { props } = this, { withContext } = props;
        if (withContext) {
            const { context: { deleteField }, } = this;
            deleteField(props.name);
        }
    }
    componentDidUpdate({ value: prevValue }) {
        const { props: { value, withContext }, } = this;
        if (prevValue !== value && withContext) {
            this.onChange(value);
        }
    }
    onClick() {
        var _a, _b;
        if (this.$inputRef) {
            (_b = (_a = this.$inputRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.click();
        }
    }
    render() {
        var _a, _b;
        const { 
        //props: { name, disabled, label, className, text, hidden, tabIndex, inset, id },
        props: { name, disabled, label, text, id, checked: Checked, withContext }, context: { fields, disabled: formDisable }, } = this;
        let checked = false;
        let error = '';
        if (withContext) {
            checked = !fields[name] ? false : !!fields[name].value;
            error = !fields[name] ? '' : (_b = (_a = fields[name]) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.errorMessage;
        }
        const checkedInit = isUndefined(Checked) ? checked : Checked;
        /*const classList = cn(
          'appForm-checkbox',
          {
            'appForm-checkbox-isError': !!error,
            'appForm-checkbox-isHidden': hidden,
            'appForm-checkbox-isDisabled': disabled,
            'appForm-checkbox--inset': inset,
            'appForm-checkbox--insetChecked': inset && checked,
          },
          className
        );*/
        return (React.createElement(CheckboxWrapperDiv, { onKeyPress: this.onEnterPress },
            React.createElement(CheckboxWrapperInnerDiv, { onClick: () => {
                    this.onClick();
                } },
                renderMark({ error, checked: checkedInit }),
                React.createElement("input", { type: "checkbox", id: id || name, name: name, disabled: disabled || formDisable === FORM_DISABLED_STATE.FORM, checked: checkedInit, onChange: ({ currentTarget }) => this.onChange(currentTarget.checked), ref: this.$inputRef }),
                React.createElement(CheckboxTextBlockDiv, null,
                    label && (React.createElement(CheckboxText, { forwardedAs: "span", variant: body2Regular }, label)),
                    text && (React.createElement(CheckboxInfoText, { forwardedAs: "p", variant: body2Regular }, text))))));
    }
}
CheckBox.defaultProps = {
    value: false,
    withContext: true,
};
CheckBox.contextType = FormContext;
