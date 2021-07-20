import React, { FocusEvent } from 'react';

//import { reverseBind } from '@utils';

import { FORM } from '@constants';
const { FORM_DISABLED_STATE } = FORM;

import { FormContext } from '../Form';

import { BasicFormComponent } from '../__types__';

import { TextareaWrapperDiv } from './styled';

type TextFieldProps = BasicFormComponent & {
  maxLength?: number;
  fitText?: boolean;
  showProgress?: boolean;
};

type State = {
  isFocus: boolean;
};

export default class TextArea extends React.Component<TextFieldProps, State> {
  $textField: React.RefObject<HTMLTextAreaElement> = React.createRef();

  static defaultProps = {
    withContext: true,
  };

  state = {
    isFocus: false,
  };

  /*constructor(props: TextFieldProps, context: FormContextType) {
    super(props);

    const { onBlur, onChange, onFocus } = props;

    this.onBlur = onBlur ? reverseBind(onBlur, context) : this.onBlur;
    this.onChange = onChange ? reverseBind(onChange, context) : this.onChange;
    this.onFocus = onFocus ? reverseBind(onFocus, context) : this.onFocus;
  }*/

  componentDidMount() {
    const { props } = this,
      { withContext } = props;

    if (withContext) {
      const {
        context: { addField },
      } = this;

      addField(props);
    }

    /*if (fitText) {
      window.addEventListener('resize', this._resizeField);
    }*/
  }

  componentWillUnmount() {
    const { props } = this,
      { withContext } = props;

    if (withContext) {
      const {
        context: { deleteField },
      } = this;

      deleteField(props.name);
    }
  }

  componentDidUpdate({ value: prevValue }: TextFieldProps) {
    const {
      props: { value, name, withContext },
      context: { onChange },
    } = this;

    //if (fitText) this._resizeField();

    if (prevValue !== value && withContext) {
      onChange(name, value);
    }
  }

  /*componentWillUnmount() {
    window.removeEventListener('resize', this._resizeField);
  }*/

  onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const { currentTarget } = event;
    const {
      props: { name },
      context: { onBlur },
    } = this;

    onBlur(name, currentTarget.value);

    this.setState({ isFocus: false });
  };

  onChange = (currentValue: string) => {
    const {
      props: { name, withContext },
      context: { onChange: onChangeForm },
    } = this;
    const { onChange } = this.props;

    if (onChange) {
      onChange(currentValue);
    }

    if (withContext) {
      onChangeForm(name, currentValue);
    }
  };

  onFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus(e);
    }

    this.setState({ isFocus: true });
  };

  /*_resizeField = () => {
    const { current: field } = this.$textField,
      lineBreaks = /\r|\n/.exec(field.value);

    if (lineBreaks) return;

    field.style.height = `${field.scrollHeight}px`;
  };*/

  static contextType = FormContext;

  render() {
    const {
      props: {
        id,
        name,
        placeholder,
        disabled,
        label,
        tabIndex,
        maxLength,
        withContext,
        value,
        className,
      },
      context: { fields, disabled: formDisable },
    } = this;

    let formValue = value;
    let error = '';

    if (withContext) {
      formValue = !fields[name] ? '' : fields[name].value;
      error = !fields[name] ? '' : fields[name].validation.errorMessage;
    }

    return (
      <TextareaWrapperDiv className={className} required={!!error}>
        {label && <label htmlFor={name}>{label}</label>}

        <textarea
          ref={this.$textField}
          tabIndex={tabIndex}
          maxLength={maxLength}
          id={id || name}
          name={name}
          value={formValue || ''}
          onChange={({ currentTarget }) => this.onChange(currentTarget.value)}
          onBlur={(e) => this.onBlur(e)}
          onFocus={this.onFocus}
          disabled={disabled || formDisable === FORM_DISABLED_STATE.FORM}
          placeholder={placeholder}
        />
      </TextareaWrapperDiv>
    );
  }
}
