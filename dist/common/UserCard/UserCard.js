import React, { useCallback } from 'react';
import { getShortName } from "../../utils";
import { AvatarBlock, TextBlock } from "../../modules";
import { FONT_VARIANTS } from "../../globalStyled";
import { UserCardWrapDiv, UserCardInfoDiv, UserCardPositionText, UserCardAvatarWrapDiv, } from './styled';
const UserCard = ({ onClick, person, short }) => {
    const { personId, firstName, lastName, positionFullName } = person;
    const { captionRegular, body2Regular } = FONT_VARIANTS;
    const handledClick = useCallback(() => {
        if (onClick) {
            onClick(person);
        }
    }, [personId, onClick]);
    return (React.createElement(UserCardWrapDiv, { onClick: onClick ? handledClick : undefined },
        React.createElement(UserCardAvatarWrapDiv, null,
            React.createElement(AvatarBlock, { user: person })),
        React.createElement(UserCardInfoDiv, null,
            React.createElement("div", null,
                React.createElement(TextBlock, { variant: body2Regular },
                    firstName,
                    " ",
                    lastName),
                React.createElement(UserCardPositionText, { variant: captionRegular }, short ? getShortName(positionFullName, 25) : positionFullName)))));
};
export default UserCard;
