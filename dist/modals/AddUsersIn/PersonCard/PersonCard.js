import React, { forwardRef } from 'react';
import { CheckBox } from "../../../common";
import { AvatarBlock, BoxBlock } from "../../../modules";
import { FONT_VARIANTS } from "../../../globalStyled";
import { CheckedMarkSVG, PersonCardCheckBoxDiv, StyledContentContainerDiv, StyledFullNameText, StyledPersonCardLabel, PositionTextBlock, } from './styled';
export const PersonCard = forwardRef(function PersonCard({ userId, firstName = 'Имя', lastName = 'Фамилия', isAnonymous, position, rightSlot, avatarIcon, photoUrl, fullNamePrefix, fullNamePostfix, avatarSize, onClick, removeChoose, title, addChoosePerson, removeChoosePerson, isFixed = false, ...props }, ref) {
    const { body1Semibold, captionRegular } = FONT_VARIANTS;
    return (React.createElement(StyledPersonCardLabel, { ref: ref, ...props, title: title, isFixed: isFixed },
        React.createElement(PersonCardCheckBoxDiv, null, isFixed ? (React.createElement(CheckedMarkSVG, { isfixed: isFixed === null || isFixed === void 0 ? void 0 : isFixed.toString() })) : (React.createElement(CheckBox, { onChange: (val) => {
                if (val) {
                    addChoosePerson();
                }
                else {
                    removeChoosePerson();
                }
            }, name: userId }))),
        React.createElement(BoxBlock, null,
            React.createElement(AvatarBlock, { user: { photo: photoUrl, firstName, lastName } })),
        React.createElement(StyledContentContainerDiv, null,
            React.createElement(StyledFullNameText, { variant: body1Semibold },
                fullNamePrefix,
                " ",
                firstName,
                " ",
                lastName,
                " ",
                fullNamePostfix),
            React.createElement(PositionTextBlock, { variant: captionRegular }, position))));
});
