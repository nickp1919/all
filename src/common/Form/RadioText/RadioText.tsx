import React, { ChangeEvent } from 'react';

import { FormContext } from '../Form';
import { BasicFormComponent } from '../__types__';

import { Label, TextArea } from '@common/Form';
import { renderMark } from '@common/Form/Radio/Radio';

import { isUndefined } from '@utils';

type Props = BasicFormComponent & {
  name: string;
  value?: string;
  label?: string;
  onChange?: any; // TODO: any
  checked?: boolean;
};

import { RadioWrapperDiv, TextAreaDiv } from './styled';
import { QUESTION } from '@constants';

export default class RadioText extends React.Component<Props> {
  $radioInput: React.RefObject<HTMLInputElement> = React.createRef();

  static defaultProps = {
    withContext: true,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      textBoxActivate: undefined,
    };
  }

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

  onChange = ({ id, value }: { id: string; value: string }) => {
    const {
      props: { name, withContext },
      context: { onChange: onChangeForm },
    } = this;

    const { onChange } = this.props;

    if (onChange) {
      onChange(id, value);
    }

    if (withContext) {
      onChangeForm(name, value);
    }
  };

  static contextType = FormContext;

  initChange(e: ChangeEvent<HTMLInputElement>) {
    const currentValue = e.currentTarget.value;

    this.onChange({ id: QUESTION.ANSWER_VARIANT.VALUE, value: currentValue });
  }

  render() {
    const {
      props: { name, value, label, checked, withContext },
      context: { fields },
    } = this;

    let formValue = '';
    let error = '';

    if (withContext) {
      formValue = !fields[name] ? '' : fields[name].value;
      error = !fields[name] ? '' : fields[name].validation.errorMessage;
    }

    const checkedInit = isUndefined(checked) ? formValue === value : checked;

    return (
      <RadioWrapperDiv>
        <Label name={name}>
          {renderMark({ error, checked: checkedInit })}

          <input
            type="radio"
            name={name}
            value={value}
            checked={checkedInit}
            onChange={(e) => {
              this.initChange(e);
            }}
            ref={this.$radioInput}
          />

          <TextAreaDiv>
            <TextArea
              placeholder="ваш вариант ответа"
              name="answerVariantText"
              onChange={(value: string) => {
                this.onChange({ id: QUESTION.ANSWER_VARIANT.VALUE, value });
              }}
              onFocus={(e) => {
                this.initChange(e);
              }}
              value={value !== QUESTION.ANSWER_VARIANT.VALUE ? value : ''}
              withContext={false}
            />
          </TextAreaDiv>

          {label && <div>{label}</div>}
        </Label>
      </RadioWrapperDiv>
    );
  }
}
