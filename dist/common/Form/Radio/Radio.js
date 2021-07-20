import React from 'react';
import { ReactComponent as CheckedMarkIcon } from "../../../assets/form-icons/check-radio.svg";
import { ReactComponent as UncheckedMarkIcon } from "../../../assets/form-icons/unchecked-radio.svg";
import { ReactComponent as ErrorMarkIcon } from "../../../assets/form-icons/error-radio.svg";
import { FormContext } from '../Form';
import { isUndefined } from "../../../utils";
import { FONT_VARIANTS } from "../../../globalStyled";
const { body2Regular } = FONT_VARIANTS;
import { RadioText, RadioWrapperDiv, RadioWrapperInnerDiv, RadioTextBlockSpan, RadioTextBlockDiv, } from './styled';
export function renderMark({ error, checked, onClick, }) {
    let Icon = UncheckedMarkIcon;
    if (error) {
        Icon = ErrorMarkIcon;
    }
    if (checked) {
        Icon = CheckedMarkIcon;
    }
    return (React.createElement(RadioTextBlockSpan, { onClick: () => {
            onClick && onClick();
        } },
        React.createElement(Icon, null)));
}
export default class Radio extends React.Component {
    constructor() {
        super(...arguments);
        this.$inputRef = React.createRef();
        this.onChange = ({ value }) => {
            const { props: { name, withContext }, context: { onChange: onChangeForm }, } = this;
            const { onChange } = this.props;
            if (onChange) {
                onChange(value || '');
            }
            if (withContext) {
                onChangeForm(name, value);
            }
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
    render() {
        var _a, _b;
        const { props: { name, value, label, checked, withContext }, context: { fields }, } = this;
        let formValue = '';
        let error = '';
        if (withContext) {
            formValue = !fields[name] ? '' : fields[name].value;
            error = !fields[name] ? '' : (_b = (_a = fields[name]) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.errorMessage;
        }
        const checkedInit = isUndefined(checked) ? formValue === value : checked;
        return (React.createElement(RadioWrapperDiv, null,
            React.createElement(RadioWrapperInnerDiv, { onClick: () => {
                    var _a, _b;
                    if (this.$inputRef) {
                        (_b = (_a = this.$inputRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.click();
                    }
                } },
                renderMark({ error, checked: checkedInit }),
                React.createElement("input", { type: "radio", name: name, value: value || '', checked: checkedInit, onChange: ({ currentTarget }) => {
                        this.onChange({ value: currentTarget.value });
                    }, ref: this.$inputRef }),
                React.createElement(RadioTextBlockDiv, null, label && (React.createElement(RadioText, { forwardedAs: "span", variant: body2Regular }, label))))));
    }
}
Radio.defaultProps = {
    withContext: true,
};
Radio.contextType = FormContext;
