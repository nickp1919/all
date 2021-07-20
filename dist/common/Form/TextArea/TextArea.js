import React from 'react';
//import { reverseBind } from '@utils';
import { FORM } from "../../../constants";
const { FORM_DISABLED_STATE } = FORM;
import { FormContext } from '../Form';
import { TextareaWrapperDiv } from './styled';
export default class TextArea extends React.Component {
    constructor() {
        super(...arguments);
        this.$textField = React.createRef();
        this.state = {
            isFocus: false,
        };
        /*componentWillUnmount() {
          window.removeEventListener('resize', this._resizeField);
        }*/
        this.onBlur = (event) => {
            const { currentTarget } = event;
            const { props: { name }, context: { onBlur }, } = this;
            onBlur(name, currentTarget.value);
            this.setState({ isFocus: false });
        };
        this.onChange = (currentValue) => {
            const { props: { name, withContext }, context: { onChange: onChangeForm }, } = this;
            const { onChange } = this.props;
            if (onChange) {
                onChange(currentValue);
            }
            if (withContext) {
                onChangeForm(name, currentValue);
            }
        };
        this.onFocus = (e) => {
            const { onFocus } = this.props;
            if (onFocus) {
                onFocus(e);
            }
            this.setState({ isFocus: true });
        };
    }
    /*constructor(props: TextFieldProps, context: FormContextType) {
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
        /*if (fitText) {
          window.addEventListener('resize', this._resizeField);
        }*/
    }
    componentWillUnmount() {
        const { props } = this, { withContext } = props;
        if (withContext) {
            const { context: { deleteField }, } = this;
            deleteField(props.name);
        }
    }
    componentDidUpdate({ value: prevValue }) {
        const { props: { value, name, withContext }, context: { onChange }, } = this;
        //if (fitText) this._resizeField();
        if (prevValue !== value && withContext) {
            onChange(name, value);
        }
    }
    render() {
        const { props: { id, name, placeholder, disabled, label, tabIndex, maxLength, withContext, value, className, }, context: { fields, disabled: formDisable }, } = this;
        let formValue = value;
        let error = '';
        if (withContext) {
            formValue = !fields[name] ? '' : fields[name].value;
            error = !fields[name] ? '' : fields[name].validation.errorMessage;
        }
        return (React.createElement(TextareaWrapperDiv, { className: className, required: !!error },
            label && React.createElement("label", { htmlFor: name }, label),
            React.createElement("textarea", { ref: this.$textField, tabIndex: tabIndex, maxLength: maxLength, id: id || name, name: name, value: formValue || '', onChange: ({ currentTarget }) => this.onChange(currentTarget.value), onBlur: (e) => this.onBlur(e), onFocus: this.onFocus, disabled: disabled || formDisable === FORM_DISABLED_STATE.FORM, placeholder: placeholder })));
    }
}
TextArea.defaultProps = {
    withContext: true,
};
/*_resizeField = () => {
  const { current: field } = this.$textField,
    lineBreaks = /\r|\n/.exec(field.value);

  if (lineBreaks) return;

  field.style.height = `${field.scrollHeight}px`;
};*/
TextArea.contextType = FormContext;
