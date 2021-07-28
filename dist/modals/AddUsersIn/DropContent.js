import React from 'react';
import { ScrollbarWrapper, TextBlock } from "../../modules";
import SelectedPerson from './SelectedPerson';
import { isArrayCount } from "../../utils";
import { ASSESSMENT_360 } from "../../constants";
import { FONT_VARIANTS } from "../../globalStyled";
const { h3Semibold, body1Regular } = FONT_VARIANTS;
const { TYPE } = ASSESSMENT_360;
import { DropContentDiv, StyledPersonCard, UserListEmptyDiv, UserListEmptyInnerDiv, UserListEmptyText, ChosenPersonsUl, 
//DropContentCheckBoxDiv,
DropContentCardsDiv, AddUsersInPanelText, ScrollbarHorizontalStyles, } from './styled';
const getHeight = (count) => {
    if (count === 0) {
        return 'auto';
    }
    if (count < 4) {
        return 40;
    }
    if (count < 7) {
        return 80;
    }
    return 120;
};
/*const getHeightCards = (count: number) => {
  if (count === 0) {
    return 305;
  }

  if (count < 4) {
    return 345;
  }

  if (count < 7) {
    return 385;
  }

  return 425;
};*/
function renderCardPerson(usersChoose, removeChoosePerson) {
    if (isArrayCount(usersChoose)) {
        return usersChoose.map((user, i) => {
            const { TYPE } = ASSESSMENT_360;
            let person;
            if (user === null || user === void 0 ? void 0 : user.personId) {
                person = user;
            }
            else if (user === null || user === void 0 ? void 0 : user.participant) {
                const { participant } = user;
                person = participant;
            }
            else if (user === null || user === void 0 ? void 0 : user.person) {
                const { person: choosePerson } = user;
                person = choosePerson;
            }
            else {
                const { pbasic, personUuid } = user;
                person = {
                    personId: personUuid,
                    firstName: pbasic && pbasic.firstName,
                    lastName: pbasic && pbasic.lastName,
                };
            }
            return (React.createElement(SelectedPerson, { person: person, handleDelete: () => removeChoosePerson(user), isFixed: (user === null || user === void 0 ? void 0 : user.type) === TYPE.FIXED.name, key: i }));
        });
    }
}
const DropContent = ({ findNowUsers, usersChoose, addChoosePerson, removeChoosePerson, 
//checkedAll,
//handledCheckedAll,
stubDescription = 'настройте фильтры или найдите сотрудника через ФИО и название позиции', }) => {
    const countUsers = isArrayCount(usersChoose);
    const countFindNowUsers = isArrayCount(findNowUsers);
    return (React.createElement(DropContentDiv, null, countFindNowUsers || countUsers ? (React.createElement("div", null,
        React.createElement(ScrollbarWrapper, { height: getHeight(countUsers), horizontalStyle: ScrollbarHorizontalStyles },
            React.createElement(ChosenPersonsUl, { forwardedAs: "ul" }, renderCardPerson(usersChoose, removeChoosePerson))),
        React.createElement(AddUsersInPanelText, { variant: "subheadlineBold" }, `нашлось сотрудников: ${isArrayCount(findNowUsers)}`),
        React.createElement(DropContentCardsDiv, null, findNowUsers.map((user) => {
            const isFixed = (user === null || user === void 0 ? void 0 : user.isFixed) || (user === null || user === void 0 ? void 0 : user.type) === TYPE.FIXED.name;
            let userData;
            if (user === null || user === void 0 ? void 0 : user.personId) {
                const { personId, firstName, lastName, positionFullName } = user;
                userData = {
                    key: personId,
                    userId: personId,
                    firstName,
                    lastName,
                    position: positionFullName,
                };
            }
            else if (user === null || user === void 0 ? void 0 : user.participant) {
                const { participant } = user;
                const { personId, firstName, lastName, positionFullName } = participant;
                userData = {
                    key: personId,
                    userId: personId,
                    firstName,
                    lastName,
                    position: positionFullName,
                };
            }
            else {
                const { pbasic, jposition, personUuid, pbasicphoto } = user;
                let position = '';
                if (jposition && jposition.position && jposition.position[0]) {
                    position = jposition.position[0].fullName ? jposition.position[0].fullName : '';
                }
                userData = {
                    key: personUuid,
                    userId: personUuid,
                    firstName: pbasic ? pbasic.firstName : '',
                    lastName: pbasic ? pbasic.lastName : '',
                    position,
                    photoUrl: pbasicphoto === null || pbasicphoto === void 0 ? void 0 : pbasicphoto.url,
                };
            }
            return (React.createElement(StyledPersonCard, { ...userData, addChoosePerson: () => addChoosePerson(user), removeChoosePerson: () => removeChoosePerson(user), isFixed: isFixed, key: userData.userId }));
        })))) : (React.createElement(UserListEmptyDiv, null,
        React.createElement(UserListEmptyInnerDiv, null,
            React.createElement(TextBlock, { as: "p", variant: h3Semibold },
                ' ',
                "\u043F\u043E\u0440\u0430 \u0438\u0441\u043A\u0430\u0442\u044C",
                ' '),
            React.createElement(UserListEmptyText, { as: "div", variant: body1Regular }, stubDescription))))));
};
export default DropContent;
