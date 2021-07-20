import { FORM, FORM_VALIDATE } from "../../constants";
const { FIELD_ALERTS, FIELD_TOOLTIPS, FORM_ALERTS } = FORM;
const { EMAIL } = FORM_VALIDATE;
const VALIDATORS = {
    required: {
        method: (value) => !!value,
        errorMessage: FIELD_ALERTS.REQUIRED_FIELD,
        formError: FORM_ALERTS.REQUIRED_FIELDS,
    },
    agreement: {
        method: (value) => !!value,
        errorMessage: FIELD_ALERTS.AGREEMENT_TEXT,
    },
    email: {
        method: EMAIL.rule,
        errorMessage: EMAIL.message,
    },
    address: {
        method: /^0x[0-9a-fA-F]{40}$/,
        errorMessage: FIELD_TOOLTIPS.ETHER_ADDRESS,
    },
    password: {
        method: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        errorMessage: FIELD_TOOLTIPS.PASSWORD,
    },
    equalWith: {
        method: (value, fieldName, { fields } // TODO: any
        ) => value === fields[fieldName].value,
        errorMessage: "Passwords don't match!",
    },
    referrer: {
        method: (value) => value && value.match(/^[a-zA-Z0-9]*$/) && (value.length === 6 || value.length === 9),
        errorMessage: FIELD_ALERTS.REFERRER_TEXT,
    },
};
export default VALIDATORS;
