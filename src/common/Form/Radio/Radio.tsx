import React from 'react';

import { ReactComponent as CheckedMarkIcon } from '@assets/form-icons/check-radio.svg';
import { ReactComponent as UncheckedMarkIcon } from '@assets/form-icons/unchecked-radio.svg';
import { ReactComponent as ErrorMarkIcon } from '@assets/form-icons/error-radio.svg';

import { FormContext } from '../Form';
import { BasicFormComponent } from '../__types__';

import { isUndefined } from '@utils';

import { FONT_VARIANTS } from '@globalStyled';
const { body2Regular } = FONT_VARIANTS;

type Props = BasicFormComponent & {
  name: string;
  value?: string;
  label?: string;
  img?: string;
};

import {
  RadioText,
  RadioWrapperDiv,
  RadioWrapperInnerDiv,
  RadioTextBlockSpan,
  RadioTextBlockDiv,
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
  let Icon = UncheckedMarkIcon;

  if (error) {
    Icon = ErrorMarkIcon;
  }

  if (checked) {
    Icon = CheckedMarkIcon;
  }

  return (
    <RadioTextBlockSpan
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Icon />
    </RadioTextBlockSpan>
  );
}

export default class Radio extends React.Component<Props> {
  $inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  static defaultProps = {
    withContext: true,
  };

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

  onChange = ({ value }: { id?: string; value: string }) => {
    const {
      props: { name, withContext },
      context: { onChange: onChangeForm },
    } = this;

    const { onChange } = this.props;

    if (onChange) {
      onChange(value || '');
    }

    if (withContext) {
      onChangeForm(name, value);
    }
  };

  static contextType = FormContext;

  render() {
    const {
      props: { name, value, label, checked, withContext },
      context: { fields },
    } = this;

    let formValue = '';
    let error = '';

    if (withContext) {
      formValue = !fields[name] ? '' : fields[name].value;
      error = !fields[name] ? '' : fields[name]?.validation?.errorMessage;
    }

    const checkedInit = isUndefined(checked) ? formValue === value : checked;

    return (
      <RadioWrapperDiv>
        <RadioWrapperInnerDiv
          onClick={() => {
            if (this.$inputRef) {
              this.$inputRef?.current?.click();
            }
          }}
        >
          {renderMark({ error, checked: checkedInit })}

          <input
            type="radio"
            name={name}
            value={value || ''}
            checked={checkedInit}
            onChange={({ currentTarget }: { currentTarget: { value: string } }) => {
              this.onChange({ value: currentTarget.value });
            }}
            ref={this.$inputRef}
          />

          <RadioTextBlockDiv>
            {label && (
              <RadioText forwardedAs="span" variant={body2Regular}>
                {label}
              </RadioText>
            )}
          </RadioTextBlockDiv>
        </RadioWrapperInnerDiv>
      </RadioWrapperDiv>
    );
  }
}
