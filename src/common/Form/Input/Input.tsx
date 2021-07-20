import React from 'react';

//import { reverseBind } from '@utils';

import { FORM } from '@constants';
const { FORM_DISABLED_STATE } = FORM;

import { FormContext } from '../Form';

//import type { FormContextType, BasicFormComponent } from '../__types__';
import { BasicFormComponent } from '../__types__';

import { InputWrapperDiv } from './styled';
// import { IPersonCardProps } from '@common/PersonCard/types';

type TConnectTo = {
  name: string;
  handler: (value: string) => string;
};

type Props = BasicFormComponent & {
  type?: string;
  readonly?: boolean;
  min?: number;
  max?: number;
  autocomplete?: 'on' | 'off';
  connectTo?: TConnectTo[];
  noValidate?: boolean;
  maxLength?: number;
  hidden?: boolean;
  mask?: { test: Function };
  icon?: {
    element: React.ReactNode;
    rightAlign?: boolean;
  };
  autoFocus?: boolean;
};

class Input extends React.Component<Props> {
  static defaultProps = {
    image: 'question',
    type: 'text',
    withContext: true,
  };

  /*constructor(props: Props, context: FormContextType) {
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

  componentDidUpdate({ value: prevValue }: Readonly<Props>) {
    const {
      props: { value, withContext },
    } = this;

    if (prevValue !== value && withContext) {
      this.onChange(value);
    }
  }

  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    const {
      props: { name },
      context: { onBlur },
    } = this;

    onBlur(name, currentTarget.value);
  };

  onChange = (currentValue: string) => {
    const {
      props: { name, connectTo, mask, withContext },
      context: { onChange: onChangeForm },
    } = this;

    if (currentValue && mask && !this.checkByMask(currentValue)) {
      return false;
    }

    if (connectTo) {
      if (Array.isArray(connectTo)) {
        connectTo.forEach(({ name: fieldName, handler }) =>
          onChangeForm(fieldName, handler ? handler(currentValue) : currentValue)
        );
      } else {
        const { name: fieldName, handler }: TConnectTo = connectTo;

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

  onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const {
      context: { onFocus },
    } = this;

    onFocus(event);
  };

  checkByMask(val: string) {
    const { mask } = this.props;

    return mask?.test(val);
  }

  static contextType = FormContext;

  render() {
    const {
      props: {
        name,
        type,
        maxLength,
        placeholder,
        disabled,
        autocomplete,
        label,
        tabIndex,
        autoFocus,
        withContext,
        min,
        className,
        hidden,
      },
      context: { fields, disabled: formDisable },
    } = this;

    let formValue = '';
    let error = '';

    if (withContext) {
      formValue = fields[name] && fields[name].value ? fields[name].value : '';
      error = !fields[name] ? '' : fields[name]?.validation?.errorMessage;
    }

    return (
      <InputWrapperDiv required={!!error} className={className} hidden={hidden}>
        {label && !hidden && <div>{label}</div>}

        <input
          tabIndex={tabIndex}
          id={name}
          name={name}
          type={type}
          value={formValue}
          maxLength={maxLength}
          onBlur={(e) => this.onBlur(e)}
          onChange={({ currentTarget }) => this.onChange(currentTarget.value)}
          onFocus={(e) => this.onFocus(e)}
          placeholder={placeholder}
          disabled={disabled || formDisable === FORM_DISABLED_STATE.FORM}
          autoComplete={autocomplete}
          autoFocus={autoFocus}
          min={min}
          hidden={hidden}
        />
      </InputWrapperDiv>
    );
  }
}

export default React.forwardRef((props: Props, ref) => <Input {...props} />);
