import React from 'react';

import { FORM } from '@constants';
const { FORM_DISABLED_STATE } = FORM;
import { FONT_VARIANTS } from '@globalStyled';
const { body2Regular } = FONT_VARIANTS;

import { ReactComponent as CheckedMark } from '@assets/form-icons/check-checkbox.svg';
import { ReactComponent as UncheckedMark } from '@assets/form-icons/unchecked-checkbox.svg';
import { ReactComponent as ErrorMark } from '@assets/form-icons/error-checkbox.svg';

import { FormContext } from '../Form';

import { isUndefined } from '@utils';

import { BasicFormComponent } from '../__types__';

import {
  CheckboxWrapperDiv,
  CheckboxWrapperInnerDiv,
  CheckboxText,
  CheckboxInfoText,
  CheckboxTextBlockDiv,
  CheckboxTextBlockSpan,
} from './styled';

export function renderMark({
  error,
  checked,
  onClick,
}: {
  error: string;
  checked: boolean | undefined;
  onClick?: Function;
}) {
  let Icon = UncheckedMark;

  if (error) {
    Icon = ErrorMark;
  }

  if (checked) {
    Icon = CheckedMark;
  }

  return (
    <CheckboxTextBlockSpan
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Icon />
    </CheckboxTextBlockSpan>
  );
}

type CheckboxProps = BasicFormComponent & {
  text?: string;
  agreement?: boolean;
  inset?: boolean;
  id?: string | undefined;
  onChange?: any; // TODO: any
  img?: string;
};

export default class CheckBox extends React.Component<CheckboxProps> {
  static defaultProps = {
    value: false,
    withContext: true,
  };

  $inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  /*constructor(props: CheckboxProps, context: FormContextType) {
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

  componentDidUpdate({ value: prevValue }: CheckboxProps) {
    const {
      props: { value, withContext },
    } = this;

    if (prevValue !== value && withContext) {
      this.onChange(value);
    }
  }

  onChange = (currentValue: boolean) => {
    const {
      props: { name, withContext },
      context: { onChange: onChangeForm },
    } = this;
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

  onEnterPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      const { fields } = this.context,
        { name } = this.props;

      this.onChange(!fields[name].value);
    }
  };

  onClick() {
    if (this.$inputRef) {
      this.$inputRef?.current?.click();
    }
  }

  static contextType = FormContext;

  render() {
    const {
      //props: { name, disabled, label, className, text, hidden, tabIndex, inset, id },
      props: { name, disabled, label, text, id, checked: Checked, withContext },
      context: { fields, disabled: formDisable },
    } = this;

    let checked = false;
    let error = '';

    if (withContext) {
      checked = !fields[name] ? false : !!fields[name].value;
      error = !fields[name] ? '' : fields[name]?.validation?.errorMessage;
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

    return (
      <CheckboxWrapperDiv onKeyPress={this.onEnterPress}>
        <CheckboxWrapperInnerDiv
          onClick={() => {
            this.onClick();
          }}
        >
          {renderMark({ error, checked: checkedInit })}

          <input
            type="checkbox"
            id={id || name}
            name={name}
            disabled={disabled || formDisable === FORM_DISABLED_STATE.FORM}
            checked={checkedInit}
            onChange={({ currentTarget }) => this.onChange(currentTarget.checked)}
            ref={this.$inputRef}
            //onFocus={this.onFocus}
            //onBlur={this.onBlur}
          />

          <CheckboxTextBlockDiv>
            {label && (
              <CheckboxText forwardedAs="span" variant={body2Regular}>
                {label}
              </CheckboxText>
            )}

            {text && (
              <CheckboxInfoText forwardedAs="p" variant={body2Regular}>
                {text}
              </CheckboxInfoText>
            )}
          </CheckboxTextBlockDiv>
        </CheckboxWrapperInnerDiv>
      </CheckboxWrapperDiv>
    );
  }
}
