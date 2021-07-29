import React, { useCallback, useRef, useState } from 'react';
import { ReactComponent as XIcon } from "../../assets/x.svg";
import { ReactComponent as MagnifierIcon } from "../../assets/magnifier.svg";
import { debounceFn, isArrayCount } from "../../utils";
import { findUser } from './AddUsersIn';
import { HTTP_SEARCH_USERS } from "../../constants";
import { HttpRequest } from '@hrplatform/utils';
import { InputBlock, GlobalContentDiv, GlobalSearchDiv } from './styled';
export const http = new HttpRequest(process.env.PLATFORM_HOST, HTTP_SEARCH_USERS.OPTIONS);
const PersonSearch = ({ allUsersAdd, setSpinner, setUserList, role, }) => {
    const $Search = useRef(null);
    const [searchValue, setSearchValue] = useState('');
    const getData = async (query, allUsersAddData) => {
        try {
            setSpinner(true);
            const searchStr = encodeURIComponent(query);
            const data = (await http.get(`${HTTP_SEARCH_USERS.URL}PERSONS?page=0&size=50&query=${searchStr}`)) || {};
            const users = [];
            /*
                      usersChoose - юзеры, которые уже были добавлены
                      data?.persons - то что вернул сервис search
                   */
            if (isArrayCount(data === null || data === void 0 ? void 0 : data.persons)) {
                data.persons.forEach((person) => {
                    // Для списка userList проставляем уже добавленных ранне людей
                    // и по полю isFixed меняем input на серую картинку
                    allUsersAddData.forEach((user) => {
                        if (findUser(user.person, person)) {
                            // указываем что мы его добавляли ранее
                            person.isChecked = true;
                            if ((user === null || user === void 0 ? void 0 : user.role) === role) {
                                // если мы зашли в группу в которой чел и находится
                                // прописываем ему тип и в DropContent проверяем на TYPE.FIXED
                                person.type = user === null || user === void 0 ? void 0 : user.type;
                            }
                            else {
                                // если мы нашли чела который уже добавлен в другую группу
                                person.isFixed = true;
                            }
                        }
                    });
                    users.push(person);
                });
            }
            if (isArrayCount(users)) {
                data.persons = users;
            }
            setSpinner(false);
            setUserList((data === null || data === void 0 ? void 0 : data.persons) || []);
        }
        catch (err) {
            console.error(err);
        }
    };
    const delayedGetData = useRef(debounceFn((query, allUsersAddData) => {
        if (query.length >= 3) {
            getData(query, allUsersAddData);
        }
    }, 500)).current;
    const onChangeValueSearch = useCallback((value) => {
        setSearchValue(value);
        delayedGetData(value, allUsersAdd);
    }, [delayedGetData, allUsersAdd]);
    const handleClickClean = () => {
        setSearchValue('');
        setUserList([]);
    };
    return (React.createElement(GlobalSearchDiv, null,
        React.createElement(GlobalContentDiv, null,
            React.createElement(MagnifierIcon, null),
            React.createElement(InputBlock, { name: "searchUsers", placeholder: "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434\u0438\u0442\u044C \u0424\u0418\u041E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430", ref: $Search, onChange: onChangeValueSearch, value: searchValue, autoFocus: true }),
            searchValue && React.createElement(XIcon, { onClick: handleClickClean, style: { cursor: 'pointer' } }))));
};
export default PersonSearch;
