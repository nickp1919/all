import React from 'react';
import { FormContext } from "../Form";
import { FONT_VARIANTS } from "../../../globalStyled";
import { ErrorFieldHelpWrapperDiv, ErrorTextBlock } from './styled';
const { body2Regular } = FONT_VARIANTS;
export default class ErrorFieldHelp extends React.Component {
    constructor() {
        super(...arguments);
        this.onChange = (currentValue) => {
            const { props: { name }, context: { onChange: onChangeForm }, } = this;
            const { onChange } = this.props;
            if (onChange) {
                onChange(currentValue);
            }
            onChangeForm(name, currentValue);
        };
    }
    componentDidMount() {
        const { props, context: { addField }, } = this;
        addField(props);
    }
    componentWillUnmount() {
        const { props, context: { deleteField }, } = this;
        deleteField(props.name);
    }
    componentDidUpdate({ value: prevValue }) {
        if (prevValue !== this.props.value) {
            this.onChange(this.props.value);
        }
    }
    render() {
        const { props: { name, type, text, styles }, context: { fields }, } = this;
        const formValue = fields[name] && fields[name].value ? fields[name].value : '', error = !fields[name] ? '' : fields[name].validation.errorMessage;
        return (React.createElement(ErrorFieldHelpWrapperDiv, null,
            error && (React.createElement(ErrorTextBlock, { as: "p", variant: body2Regular, __css: styles }, text)),
            React.createElement("input", { id: name, name: name, type: type, value: formValue, onChange: ({ currentTarget }) => this.onChange(currentTarget.value) })));
    }
}
ErrorFieldHelp.defaultProps = {
    type: 'text',
};
ErrorFieldHelp.contextType = FormContext;
