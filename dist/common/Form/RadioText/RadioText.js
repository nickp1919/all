import React from 'react';
import { FormContext } from '../Form';
import { Label, TextArea } from "..";
import { renderMark } from "../Radio/Radio";
import { isUndefined } from "../../../utils";
import { RadioWrapperDiv, TextAreaDiv } from './styled';
import { QUESTION } from "../../../constants";
export default class RadioText extends React.Component {
    constructor(props) {
        super(props);
        this.$radioInput = React.createRef();
        this.onChange = ({ id, value }) => {
            const { props: { name, withContext }, context: { onChange: onChangeForm }, } = this;
            const { onChange } = this.props;
            if (onChange) {
                onChange(id, value);
            }
            if (withContext) {
                onChangeForm(name, value);
            }
        };
        this.state = {
            textBoxActivate: undefined,
        };
    }
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
    initChange(e) {
        const currentValue = e.currentTarget.value;
        this.onChange({ id: QUESTION.ANSWER_VARIANT.VALUE, value: currentValue });
    }
    render() {
        const { props: { name, value, label, checked, withContext }, context: { fields }, } = this;
        let formValue = '';
        let error = '';
        if (withContext) {
            formValue = !fields[name] ? '' : fields[name].value;
            error = !fields[name] ? '' : fields[name].validation.errorMessage;
        }
        const checkedInit = isUndefined(checked) ? formValue === value : checked;
        return (React.createElement(RadioWrapperDiv, null,
            React.createElement(Label, { name: name },
                renderMark({ error, checked: checkedInit }),
                React.createElement("input", { type: "radio", name: name, value: value, checked: checkedInit, onChange: (e) => {
                        this.initChange(e);
                    }, ref: this.$radioInput }),
                React.createElement(TextAreaDiv, null,
                    React.createElement(TextArea, { placeholder: "\u0432\u0430\u0448 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430", name: "answerVariantText", onChange: (value) => {
                            this.onChange({ id: QUESTION.ANSWER_VARIANT.VALUE, value });
                        }, onFocus: (e) => {
                            this.initChange(e);
                        }, value: value !== QUESTION.ANSWER_VARIANT.VALUE ? value : '', withContext: false })),
                label && React.createElement("div", null, label))));
    }
}
RadioText.defaultProps = {
    withContext: true,
};
RadioText.contextType = FormContext;
