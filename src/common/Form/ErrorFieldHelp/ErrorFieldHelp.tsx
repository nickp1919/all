import React from 'react';

import { FormContext } from '@common/Form/Form';
import { BasicFormComponent } from '@common/Form/__types__';

import { FONT_VARIANTS } from '@globalStyled';

import { ErrorFieldHelpWrapperDiv, ErrorTextBlock } from './styled';

type Props = BasicFormComponent & {
  type?: string;
  noValidate?: boolean;
  text: string;
  styles?: React.CSSProperties;
};

const { body2Regular } = FONT_VARIANTS;

export default class ErrorFieldHelp extends React.Component<Props> {
  static defaultProps = {
    type: 'text',
  };

  componentDidMount() {
    const {
      props,
      context: { addField },
    } = this;

    addField(props);
  }

  componentWillUnmount() {
    const {
      props,
      context: { deleteField },
    } = this;

    deleteField(props.name);
  }

  componentDidUpdate({ value: prevValue }: Readonly<Props>) {
    if (prevValue !== this.props.value) {
      this.onChange(this.props.value);
    }
  }

  onChange = (currentValue: string) => {
    const {
      props: { name },
      context: { onChange: onChangeForm },
    } = this;

    const { onChange } = this.props;

    if (onChange) {
      onChange(currentValue);
    }

    onChangeForm(name, currentValue);
  };

  static contextType = FormContext;

  render() {
    const {
      props: { name, type, text, styles },
      context: { fields },
    } = this;

    const formValue = fields[name] && fields[name].value ? fields[name].value : '',
      error = !fields[name] ? '' : fields[name].validation.errorMessage;

    return (
      <ErrorFieldHelpWrapperDiv>
        {error && (
          <ErrorTextBlock as="p" variant={body2Regular} __css={styles}>
            {text}
          </ErrorTextBlock>
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={formValue}
          onChange={({ currentTarget }) => this.onChange(currentTarget.value)}
        />
      </ErrorFieldHelpWrapperDiv>
    );
  }
}
