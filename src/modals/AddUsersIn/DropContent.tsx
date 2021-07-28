import React from 'react';

import { ScrollbarWrapper, TextBlock } from '@modules';

import SelectedPerson from './SelectedPerson';

import { isArrayCount } from '@utils';

import { ASSESSMENT_360 } from '@constants';
import { FONT_VARIANTS } from '@globalStyled';
const { h3Semibold, body1Regular } = FONT_VARIANTS;
const { TYPE } = ASSESSMENT_360;

import {
  DropContentDiv,
  StyledPersonCard,
  UserListEmptyDiv,
  UserListEmptyInnerDiv,
  UserListEmptyText,
  ChosenPersonsUl,
  //DropContentCheckBoxDiv,
  DropContentCardsDiv,
  AddUsersInPanelText,
  ScrollbarHorizontalStyles,
} from './styled';
import { IDropContent } from './types';

const getHeight = (count: number) => {
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

function renderCardPerson(usersChoose: any, removeChoosePerson: Function) {
  if (isArrayCount(usersChoose)) {
    return usersChoose.map((user: any, i: number) => {
      const { TYPE } = ASSESSMENT_360;

      let person: {};

      if (user?.personId) {
        person = user;
      } else if (user?.participant) {
        const { participant } = user;

        person = participant;
      } else if (user?.person) {
        const { person: choosePerson } = user;

        person = choosePerson;
      } else {
        const { pbasic, personUuid } = user;
        person = {
          personId: personUuid,
          firstName: pbasic && pbasic.firstName,
          lastName: pbasic && pbasic.lastName,
        };
      }

      return (
        <SelectedPerson
          person={person}
          handleDelete={() => removeChoosePerson(user)}
          isFixed={user?.type === TYPE.FIXED.name}
          key={i}
        />
      );
    });
  }
}

const DropContent: React.FC<IDropContent> = ({
  findNowUsers,
  usersChoose,
  addChoosePerson,
  removeChoosePerson,
  //checkedAll,
  //handledCheckedAll,
  stubDescription = 'настройте фильтры или найдите сотрудника через ФИО и название позиции',
}) => {
  const countUsers = isArrayCount(usersChoose);
  const countFindNowUsers = isArrayCount(findNowUsers);

  return (
    <DropContentDiv>
      {countFindNowUsers || countUsers ? (
        <div>
          <ScrollbarWrapper
            height={getHeight(countUsers)}
            horizontalStyle={ScrollbarHorizontalStyles}
          >
            <ChosenPersonsUl forwardedAs="ul">
              {renderCardPerson(usersChoose, removeChoosePerson)}
            </ChosenPersonsUl>
          </ScrollbarWrapper>

          {/*{!!countFindNowUsers && (
            <DropContentCheckBoxDiv>
              <CheckBox
                label="выбрать всех"
                name="checkedAll"
                checked={checkedAll}
                onChange={(val: boolean) => handledCheckedAll(val)}
              />
            </DropContentCheckBoxDiv>
          )}*/}

          <AddUsersInPanelText variant="subheadlineBold">
            {`нашлось сотрудников: ${isArrayCount(findNowUsers)}`}
          </AddUsersInPanelText>

          <DropContentCardsDiv>
            {/*<ScrollbarWrapper height="100%" style={{ marginTop: 20 }}>*/}
            {findNowUsers.map((user: any) => {
              const isFixed = user?.isFixed || user?.type === TYPE.FIXED.name;

              let userData: {
                key: string;
                userId: string;
                firstName: string;
                lastName: string;
                position: string;
                photoUrl?: string;
              };

              if (user?.personId) {
                const { personId, firstName, lastName, positionFullName } = user;

                userData = {
                  key: personId,
                  userId: personId,
                  firstName,
                  lastName,
                  position: positionFullName,
                };
              } else if (user?.participant) {
                const { participant } = user;
                const { personId, firstName, lastName, positionFullName } = participant;

                userData = {
                  key: personId,
                  userId: personId,
                  firstName,
                  lastName,
                  position: positionFullName,
                };
              } else {
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
                  photoUrl: pbasicphoto?.url,
                };
              }

              return (
                <StyledPersonCard
                  {...userData}
                  addChoosePerson={() => addChoosePerson(user)}
                  removeChoosePerson={() => removeChoosePerson(user)}
                  isFixed={isFixed}
                  key={userData.userId}
                />
              );
            })}
            {/*</ScrollbarWrapper>*/}
          </DropContentCardsDiv>
        </div>
      ) : (
        <UserListEmptyDiv>
          <UserListEmptyInnerDiv>
            <TextBlock as="p" variant={h3Semibold}>
              {' '}
              пора искать{' '}
            </TextBlock>

            <UserListEmptyText as="div" variant={body1Regular}>
              {stubDescription}
            </UserListEmptyText>
          </UserListEmptyInnerDiv>
        </UserListEmptyDiv>
      )}
    </DropContentDiv>
  );
};

export default DropContent;
