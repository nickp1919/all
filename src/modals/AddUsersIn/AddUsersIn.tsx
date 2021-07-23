import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';

import DropContent from './DropContent';
import PersonSearch from './PersonSearch';

import { SpinnerModule, ModalPageWrapper } from '@modules';

import { cloneArray, isArrayCount } from '@utils';

import { ASSESSMENT_360 } from '@constants';
import { FONT_VARIANTS } from '@globalStyled';

import {
  AddUsersInSubmitButton,
  SpinnerDiv,
  SearchWrapperDiv,
  FormBlock,
  AddUsersInDiv,
  AddUsersInInnerDiv,
  AddUsersInTitleText,
} from './styled';
import { TAddUsersInProps, SelectedPersonType, IPersonInfoGlobalSearch } from './types';
import { TEstimatedPerson, TGlobalSearchEstimators, TPersonSendType, TEstimator } from '@types';

const { TYPE } = ASSESSMENT_360;
const { h3Semibold } = FONT_VARIANTS;

export function findUser(user: any, person: any) {
  // user кого ищем
  // person где ищем

  const { participant, personId, personUuid } = user || {};

  if (participant) {
    if (person?.personUuid) {
      return participant.personId === person.personUuid;
    } else {
      return participant.personId === person?.participant?.personId;
    }
  } else if (personId) {
    if (person?.personUuid) {
      return personId === person.personUuid;
    } else {
      return personId === person?.personId;
    }
  } else {
    return personUuid === person?.personUuid;
  }
}

export function getUserID(user: any) {
  let id = '';

  if (user?.personId) {
    id = user.personId;
  }

  if (user?.personUuid) {
    id = user.personUuid;
  }

  return id;
}

export class AddUsersIn extends Component<TAddUsersInProps, any> {
  constructor(props: TAddUsersInProps) {
    super(props);

    this.state = {
      searchValue: '',
      usersChoose: props.usersChoose || [], // выбранные ранее юзеры
      findNowUsers: [], // список полученных при поиске юзеров
      spinner: false,
      disabled: true,
      removedUsers: [], // массив удаленных пользователей для отправки на бэк
      initialValues: {},
      checkedAll: false, // значение поля с checkbox "Выбрать всех"
      allUsersAdd: [], // формируем общий список всех людей которые були добавлены на оценку
    };
  }

  componentDidUpdate(prevProps: TAddUsersInProps, prevState: any) {
    const { usersChoose, filteredUsers, visible } = this.props;
    const { findNowUsers, usersChoose: usersChooseState } = this.state;

    /******************************************/
    if (filteredUsers !== prevProps.filteredUsers) {
      const allUsersAdd: TEstimator[] = [];

      for (const sourceKey in filteredUsers) {
        if (Object.prototype.hasOwnProperty.call(filteredUsers, sourceKey)) {
          const { values } = filteredUsers[sourceKey];

          if (isArrayCount(values)) {
            values.forEach((el: TEstimator) => {
              allUsersAdd.push(el);
            });
          }
        }
      }

      this.setState({ allUsersAdd });
    }
    /******************************************/
    // Заполняем начальными значениями при первой загрузке и после того как нашли людей
    if (usersChoose !== prevProps.usersChoose) {
      // записываем в state usersChoose для отрисовки при первой загрузке,
      // именно из state он используется в дальнейшем
      this.setState({
        initialValues: this.setInitialValues(usersChoose, findNowUsers),
        usersChoose,
      });
    }

    // Перезаписываем initialValues после нового поиска
    if (findNowUsers !== prevState.findNowUsers) {
      this.setState({ initialValues: this.setInitialValues(usersChooseState, findNowUsers) });
    }
    /******************************************/
    if (visible !== prevProps.visible) {
      if (!visible) {
        this.setState({ findNowUsers: [] });
      }
    }
    /******************************************/
  }

  setInitialValues(usersChoose: TEstimatedPerson[], findNowUsers: IPersonInfoGlobalSearch[]) {
    const valuesID: { [key: string]: boolean } = {};

    if (isArrayCount(usersChoose)) {
      findNowUsers.forEach((person: TGlobalSearchEstimators) => {
        const isBeforeAdded = usersChoose.filter((user: TEstimatedPerson) =>
          findUser(user, person)
        );
        valuesID[getUserID(person)] = !!isArrayCount(isBeforeAdded);
      });
    } else {
      findNowUsers.forEach((person: TGlobalSearchEstimators) => {
        valuesID[getUserID(person)] = false;
      });
    }

    return valuesID;
  }

  addChoosePerson = (
    person: TGlobalSearchEstimators,
    usersChoose: TGlobalSearchEstimators[],
    findNowUsers: TGlobalSearchEstimators[],
    removedUsers: TGlobalSearchEstimators[]
  ) => {
    const _usersChoose = cloneArray(usersChoose);
    _usersChoose.push(person);

    const stateData: {
      usersChoose: TGlobalSearchEstimators[];
      checkedAll?: boolean;
      disabled: boolean;
      removedUsers?: TGlobalSearchEstimators[];
    } = {
      usersChoose: _usersChoose,
      disabled: false,
    };

    // сбрасываем флаг "выбрать всех"
    if (isArrayCount(findNowUsers) === isArrayCount(_usersChoose)) {
      stateData.checkedAll = true;
    }

    // кейс когда мы сначала удалил ранее добавленного чела, а потом добавил его снова
    stateData.removedUsers = removedUsers.filter(
      (user: TGlobalSearchEstimators) => !findUser(user, person)
    );

    this.setState(stateData);
  };

  removeChoosePerson = (
    person: TGlobalSearchEstimators,
    usersChoose: TEstimatedPerson[],
    checkedAll: boolean,
    removedUsers: TGlobalSearchEstimators[]
  ) => {
    const filteredUsers: TEstimatedPerson[] = [];

    const valuesID: SelectedPersonType = {};

    usersChoose.forEach((user) => {
      const User = findUser(user, person);

      // проставляем галки false для тех кого удалили
      valuesID[getUserID(user)] = !User;

      if (!User) {
        filteredUsers.push(user);
      }
    });

    const stateData: {
      initialValues: SelectedPersonType;
      usersChoose: TEstimatedPerson[];
      removedUsers?: TGlobalSearchEstimators[];
      checkedAll?: boolean;
      disabled: boolean;
    } = {
      initialValues: valuesID,
      usersChoose: filteredUsers,
      disabled: false,
    };

    // проверяем, был ли чел уже нами сохранен в базе
    // когда мы удаляем и добавляем чела несколько раз то у него меняется структура данных
    if (person?.type === TYPE.REGULAR.name) {
      const _removedUsers = cloneArray(removedUsers);

      const removedUsersFiltered = _removedUsers.filter((user: TGlobalSearchEstimators) =>
        findUser(user, person)
      );

      if (!isArrayCount(removedUsersFiltered)) {
        _removedUsers.push(person);

        stateData.removedUsers = _removedUsers;
      }
    }

    if (checkedAll) {
      stateData.checkedAll = false;
    }

    this.setState(stateData);
  };

  // Функционал "выбрать всех"
  handledCheckedAll = (
    value: boolean,
    findNowUsers: TGlobalSearchEstimators[],
    usersChoose: TEstimatedPerson[]
  ) => {
    const stateData: {
      initialValues?: SelectedPersonType;
      usersChoose?: TGlobalSearchEstimators[];
      removedUsers?: TGlobalSearchEstimators[];
      checkedAll: boolean;
    } = {
      checkedAll: value,
    };

    if (isArrayCount(findNowUsers)) {
      const valuesID: SelectedPersonType = {};

      if (value) {
        findNowUsers.forEach((user) => {
          valuesID[user.personUuid] = true;
        });

        stateData.initialValues = valuesID;

        // добавляем в список всех выбранных
        stateData.usersChoose = findNowUsers;
      } else {
        findNowUsers.forEach((user) => {
          if (user?.type !== TYPE.FIXED.name) {
            valuesID[user.personUuid] = false;
          }
        });

        stateData.initialValues = valuesID;

        // формируем данные для сохранения на бэк
        const _usersChoose: TGlobalSearchEstimators[] = [];
        const _removedUsers: TGlobalSearchEstimators[] = [];

        usersChoose.forEach((user: any) => {
          if (user?.type === TYPE.FIXED.name) {
            _usersChoose.push(user);
          }

          // TODO удаляем тех которые пришли с бэка, НО теперь мы их можем заново добавить,
          //  хотя на бэке их удаление еще не было сохранено
          if (user?.type === TYPE.REGULAR.name) {
            _removedUsers.push(user);
          }
        });

        stateData.usersChoose = _usersChoose;
        stateData.removedUsers = _removedUsers;
      }
    }

    this.setState(stateData);
  };

  handleSendUsers = (
    usersChoose: TGlobalSearchEstimators[],
    removedUsers: TGlobalSearchEstimators[],
    role: string,
    onClose: Function,
    setUpdateUsers: Function
  ) => {
    const added: TPersonSendType[] = [];
    const removed: TPersonSendType[] = [];

    // Данные для отправки на вверх
    const updateUsers: any = {};

    // Подготавливаем данные для отправки на сервер для новых
    usersChoose.forEach((user) => {
      // если юзер приходит с платформы это значит что его нужно добавить
      // user.type на случай если мы нажали крестик, а потом опять добавили его
      if (!user?.type) {
        added.push({ person: { personId: getUserID(user) }, role, ...user.pbasic });
      }
    });

    // Подготавливаем данные для отправки на сервер для удаленных
    if (isArrayCount(removedUsers)) {
      removedUsers.forEach((user: TGlobalSearchEstimators) => {
        removed.push({ person: { personId: getUserID(user) }, role, ...user.pbasic });
      });
    }

    if (isArrayCount(removed)) {
      updateUsers.removed = removed;
    }

    if (isArrayCount(added)) {
      updateUsers.added = added;
    }

    // Вызываем коллбэк (setUpdateUsers) только если объект не пустой
    if (!isEmpty(updateUsers)) {
      // передача данных наружу
      setUpdateUsers(updateUsers);
    }

    this.setState({ disabled: true });

    onClose();
  };

  render() {
    const {
      visible,
      onClose,
      removeChooseShow,
      roleInfo,
      titleText = 'добавить по ФИО',
      searchStubDescription,
      windowLevel,
      setUpdateUsers,
    } = this.props;
    const {
      spinner,
      allUsersAdd,
      initialValues,
      findNowUsers,
      checkedAll,
      usersChoose,
      disabled,
      removedUsers,
    } = this.state;

    const title = roleInfo?.title ? roleInfo?.title : titleText;
    const roleType = roleInfo?.roleType ? roleInfo?.roleType : '';

    if (!visible) {
      return null;
    }

    return (
      <ModalPageWrapper
        actionBar={
          <AddUsersInSubmitButton
            onClick={() =>
              this.handleSendUsers(usersChoose, removedUsers, roleType, onClose, setUpdateUsers)
            }
            disabled={disabled}
          >
            добавить
          </AddUsersInSubmitButton>
        }
        onClose={onClose}
        windowLevel={windowLevel}
      >
        <AddUsersInDiv>
          <AddUsersInInnerDiv>
            <AddUsersInTitleText forwardedAs="h2" variant={h3Semibold}>
              {title}
            </AddUsersInTitleText>

            <SearchWrapperDiv>
              {spinner && (
                <SpinnerDiv>
                  <SpinnerModule />
                </SpinnerDiv>
              )}

              <FormBlock initialValues={initialValues}>
                <PersonSearch
                  allUsersAdd={allUsersAdd}
                  setSpinner={(spinner: boolean) => {
                    this.setState({ spinner });
                  }}
                  setUserList={(users: TGlobalSearchEstimators[]) => {
                    this.setState({ findNowUsers: users });
                  }}
                  role={roleType}
                />

                <DropContent
                  findNowUsers={findNowUsers}
                  usersChoose={usersChoose}
                  addChoosePerson={(user) =>
                    this.addChoosePerson(user, usersChoose, findNowUsers, removedUsers)
                  }
                  removeChoosePerson={(user) =>
                    this.removeChoosePerson(user, usersChoose, checkedAll, removedUsers)
                  }
                  removeChooseShow={removeChooseShow}
                  checkedAll={checkedAll}
                  handledCheckedAll={(value: boolean) =>
                    this.handledCheckedAll(value, findNowUsers, usersChoose)
                  }
                  stubDescription={searchStubDescription}
                />
              </FormBlock>
            </SearchWrapperDiv>
          </AddUsersInInnerDiv>
        </AddUsersInDiv>
      </ModalPageWrapper>
    );
  }
}
