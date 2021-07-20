import React from 'react';
import { BUTTON_EXTRA_TYPE } from "../../constants";
import { SelectedPersonLi, XIconSvg, SelectedPersonButton } from "./styled";
const SelectedPerson = ({ person, handleDelete, isFixed = false }) => {
    const { firstName, lastName } = person;
    const { CANCEL_BUTTON } = BUTTON_EXTRA_TYPE;
    return (React.createElement(SelectedPersonLi, { forwardedAs: "li" },
        `${firstName} ${lastName}`,
        !isFixed && (React.createElement(SelectedPersonButton, { extraType: CANCEL_BUTTON, onClick: () => handleDelete(person) },
            React.createElement(XIconSvg, null)))));
};
export default SelectedPerson;
