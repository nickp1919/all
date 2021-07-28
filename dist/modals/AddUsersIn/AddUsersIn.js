import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import DropContent from './DropContent';
import PersonSearch from './PersonSearch';
import { SpinnerModule, ModalPageWrapper } from "../../modules";
import { cloneArray, isArrayCount } from "../../utils";
import { ASSESSMENT_360 } from "../../constants";
import { FONT_VARIANTS } from "../../globalStyled";
import { AddUsersInSubmitButton, SpinnerDiv, SearchWrapperDiv, FormBlock, AddUsersInDiv, AddUsersInInnerDiv, AddUsersInTitleText, } from './styled';
const { TYPE } = ASSESSMENT_360;
const { h3Semibold } = FONT_VARIANTS;
export function findUser(user, person) {
    // user кого ищем
    // person где ищем
    var _a;
    const { participant, personId, personUuid } = user || {};
    if (participant) {
        if (person === null || person === void 0 ? void 0 : person.personUuid) {
            return participant.personId === person.personUuid;
        }
        else {
            return participant.personId === ((_a = person === null || person === void 0 ? void 0 : person.participant) === null || _a === void 0 ? void 0 : _a.personId);
        }
    }
    else if (personId) {
        if (person === null || person === void 0 ? void 0 : person.personUuid) {
            return personId === person.personUuid;
        }
        else {
            return personId === (person === null || person === void 0 ? void 0 : person.personId);
        }
    }
    else {
        return personUuid === (person === null || person === void 0 ? void 0 : person.personUuid);
    }
}
export function getUserID(user) {
    let id = '';
    if (user === null || user === void 0 ? void 0 : user.personId) {
        id = user.personId;
    }
    if (user === null || user === void 0 ? void 0 : user.personUuid) {
        id = user.personUuid;
    }
    return id;
}
export class AddUsersIn extends Component {
    constructor(props) {
        super(props);
        this.addChoosePerson = (person, usersChoose, findNowUsers, removedUsers) => {
            const _usersChoose = cloneArray(usersChoose);
            _usersChoose.push(person);
            const stateData = {
                usersChoose: _usersChoose,
                disabled: false,
            };
            // сбрасываем флаг "выбрать всех"
            if (isArrayCount(findNowUsers) === isArrayCount(_usersChoose)) {
                stateData.checkedAll = true;
            }
            // кейс когда мы сначала удалил ранее добавленного чела, а потом добавил его снова
            stateData.removedUsers = removedUsers.filter((user) => !findUser(user, person));
            this.setState(stateData);
        };
        this.removeChoosePerson = (person, usersChoose, checkedAll, removedUsers) => {
            const filteredUsers = [];
            const valuesID = {};
            usersChoose.forEach((user) => {
                const User = findUser(user, person);
                // проставляем галки false для тех кого удалили
                valuesID[getUserID(user)] = !User;
                if (!User) {
                    filteredUsers.push(user);
                }
            });
            const stateData = {
                initialValues: valuesID,
                usersChoose: filteredUsers,
                disabled: false,
            };
            // проверяем, был ли чел уже нами сохранен в базе
            // когда мы удаляем и добавляем чела несколько раз то у него меняется структура данных
            if ((person === null || person === void 0 ? void 0 : person.type) === TYPE.REGULAR.name) {
                const _removedUsers = cloneArray(removedUsers);
                const removedUsersFiltered = _removedUsers.filter((user) => findUser(user, person));
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
        this.handledCheckedAll = (value, findNowUsers, usersChoose) => {
            const stateData = {
                checkedAll: value,
            };
            if (isArrayCount(findNowUsers)) {
                const valuesID = {};
                if (value) {
                    findNowUsers.forEach((user) => {
                        valuesID[user.personUuid] = true;
                    });
                    stateData.initialValues = valuesID;
                    // добавляем в список всех выбранных
                    stateData.usersChoose = findNowUsers;
                }
                else {
                    findNowUsers.forEach((user) => {
                        if ((user === null || user === void 0 ? void 0 : user.type) !== TYPE.FIXED.name) {
                            valuesID[user.personUuid] = false;
                        }
                    });
                    stateData.initialValues = valuesID;
                    // формируем данные для сохранения на бэк
                    const _usersChoose = [];
                    const _removedUsers = [];
                    usersChoose.forEach((user) => {
                        if ((user === null || user === void 0 ? void 0 : user.type) === TYPE.FIXED.name) {
                            _usersChoose.push(user);
                        }
                        // TODO удаляем тех которые пришли с бэка, НО теперь мы их можем заново добавить,
                        //  хотя на бэке их удаление еще не было сохранено
                        if ((user === null || user === void 0 ? void 0 : user.type) === TYPE.REGULAR.name) {
                            _removedUsers.push(user);
                        }
                    });
                    stateData.usersChoose = _usersChoose;
                    stateData.removedUsers = _removedUsers;
                }
            }
            this.setState(stateData);
        };
        this.handleSendUsers = (usersChoose, removedUsers, role, onClose, setUpdateUsers) => {
            const added = [];
            const removed = [];
            // Данные для отправки на вверх
            const updateUsers = {};
            // Подготавливаем данные для отправки на сервер для новых
            usersChoose.forEach((user) => {
                // если юзер приходит с платформы это значит что его нужно добавить
                // user.type на случай если мы нажали крестик, а потом опять добавили его
                if (!(user === null || user === void 0 ? void 0 : user.type)) {
                    added.push({ person: { personId: getUserID(user), ...user.pbasic }, role });
                }
            });
            // Подготавливаем данные для отправки на сервер для удаленных
            if (isArrayCount(removedUsers)) {
                removedUsers.forEach((user) => {
                    removed.push({ person: { personId: getUserID(user), ...user.pbasic }, role });
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
        this.state = {
            searchValue: '',
            usersChoose: props.usersChoose || [],
            findNowUsers: [],
            spinner: false,
            disabled: true,
            removedUsers: [],
            initialValues: {},
            checkedAll: false,
            allUsersAdd: [], // формируем общий список всех людей которые були добавлены на оценку
        };
    }
    componentDidUpdate(prevProps, prevState) {
        const { usersChoose, filteredUsers, visible } = this.props;
        const { findNowUsers, usersChoose: usersChooseState } = this.state;
        /******************************************/
        if (filteredUsers !== prevProps.filteredUsers) {
            const allUsersAdd = [];
            for (const sourceKey in filteredUsers) {
                if (Object.prototype.hasOwnProperty.call(filteredUsers, sourceKey)) {
                    const { values } = filteredUsers[sourceKey];
                    if (isArrayCount(values)) {
                        values.forEach((el) => {
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
    setInitialValues(usersChoose, findNowUsers) {
        const valuesID = {};
        if (isArrayCount(usersChoose)) {
            findNowUsers.forEach((person) => {
                const isBeforeAdded = usersChoose.filter((user) => findUser(user, person));
                valuesID[getUserID(person)] = !!isArrayCount(isBeforeAdded);
            });
        }
        else {
            findNowUsers.forEach((person) => {
                valuesID[getUserID(person)] = false;
            });
        }
        return valuesID;
    }
    render() {
        const { visible, onClose, removeChooseShow, roleInfo, titleText = 'добавить по ФИО', searchStubDescription, windowLevel, setUpdateUsers, } = this.props;
        const { spinner, allUsersAdd, initialValues, findNowUsers, checkedAll, usersChoose, disabled, removedUsers, } = this.state;
        const title = (roleInfo === null || roleInfo === void 0 ? void 0 : roleInfo.title) ? roleInfo === null || roleInfo === void 0 ? void 0 : roleInfo.title : titleText;
        const roleType = (roleInfo === null || roleInfo === void 0 ? void 0 : roleInfo.roleType) ? roleInfo === null || roleInfo === void 0 ? void 0 : roleInfo.roleType : '';
        if (!visible) {
            return null;
        }
        console.log('allUsersAdd', allUsersAdd);
        return (React.createElement(ModalPageWrapper, { actionBar: React.createElement(AddUsersInSubmitButton, { onClick: () => this.handleSendUsers(usersChoose, removedUsers, roleType, onClose, setUpdateUsers), disabled: disabled }, "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C"), onClose: onClose, windowLevel: windowLevel },
            React.createElement(AddUsersInDiv, null,
                React.createElement(AddUsersInInnerDiv, null,
                    React.createElement(AddUsersInTitleText, { forwardedAs: "h2", variant: h3Semibold }, title),
                    React.createElement(SearchWrapperDiv, null,
                        spinner && (React.createElement(SpinnerDiv, null,
                            React.createElement(SpinnerModule, null))),
                        React.createElement(FormBlock, { initialValues: initialValues },
                            React.createElement(PersonSearch, { allUsersAdd: allUsersAdd, setSpinner: (spinner) => {
                                    this.setState({ spinner });
                                }, setUserList: (users) => {
                                    this.setState({ findNowUsers: users });
                                }, role: roleType }),
                            React.createElement(DropContent, { findNowUsers: findNowUsers, usersChoose: usersChoose, addChoosePerson: (user) => this.addChoosePerson(user, usersChoose, findNowUsers, removedUsers), removeChoosePerson: (user) => this.removeChoosePerson(user, usersChoose, checkedAll, removedUsers), removeChooseShow: removeChooseShow, checkedAll: checkedAll, handledCheckedAll: (value) => this.handledCheckedAll(value, findNowUsers, usersChoose), stubDescription: searchStubDescription })))))));
    }
}
