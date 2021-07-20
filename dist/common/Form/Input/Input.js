import React from 'react';
//import { reverseBind } from '@utils';
import { FORM } from "../../../constants";
const { FORM_DISABLED_STATE } = FORM;
import { FormContext } from '../Form';
import { InputWrapperDiv } from './styled';
class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.onBlur = (event) => {
            const { currentTarget } = event;
            const { props: { name }, context: { onBlur }, } = this;
            onBlur(name, currentTarget.value);
        };
        this.onChange = (currentValue) => {
            const { props: { name, connectTo, mask, withContext }, context: { onChange: onChangeForm }, } = this;
            if (currentValue && mask && !this.checkByMask(currentValue)) {
                return false;
            }
            if (connectTo) {
                if (Array.isArray(connectTo)) {
                    connectTo.forEach(({ name: fieldName, handler }) => onChangeForm(fieldName, handler ? handler(currentValue) : currentValue));
                }
                else {
                    const { name: fieldName, handler } = connectTo;
                    onChangeForm(fieldName, handler ? handler(currentValue) : currentValue);
                }
            }
            const { onChange } = this.props;
            if (onChange) {
                onChange(currentValue);
            }
            if (withContext) {
                onChangeForm(name, currentValue);
            }
        };
        this.onFocus = (event) => {
            const { context: { onFocus }, } = this;
            onFocus(event);
        };
    }
    /*constructor(props: Props, context: FormContextType) {
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
    checkByMask(val) {
        const { mask } = this.props;
        return mask === null || mask === void 0 ? void 0 : mask.test(val);
    }
    render() {
        var _a, _b;
        const { props: { name, type, maxLength, placeholder, disabled, autocomplete, label, tabIndex, autoFocus, withContext, min, className, hidden, }, context: { fields, disabled: formDisable }, } = this;
        let formValue = '';
        let error = '';
        if (withContext) {
            formValue = fields[name] && fields[name].value ? fields[name].value : '';
            error = !fields[name] ? '' : (_b = (_a = fields[name]) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.errorMessage;
        }
        return (React.createElement(InputWrapperDiv, { required: !!error, className: className, hidden: hidden },
            label && !hidden && React.createElement("div", null, label),
            React.createElement("input", { tabIndex: tabIndex, id: name, name: name, type: type, value: formValue, maxLength: maxLength, onBlur: (e) => this.onBlur(e), onChange: ({ currentTarget }) => this.onChange(currentTarget.value), onFocus: (e) => this.onFocus(e), placeholder: placeholder, disabled: disabled || formDisable === FORM_DISABLED_STATE.FORM, autoComplete: autocomplete, autoFocus: autoFocus, min: min, hidden: hidden })));
    }
}
Input.defaultProps = {
    image: 'question',
    type: 'text',
    withContext: true,
};
Input.contextType = FormContext;
export default React.forwardRef((props, ref) => React.createElement(Input, { ...props }));
