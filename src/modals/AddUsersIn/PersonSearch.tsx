import React, { useCallback, useRef, useState } from 'react';

import { ReactComponent as XIcon } from '@assets/x.svg';
import { ReactComponent as MagnifierIcon } from '@assets/magnifier.svg';

import { debounceFn, isArrayCount } from '@utils';
import { findUser } from './AddUsersIn';

import { HTTP_SEARCH_USERS } from '@constants';

import { HttpRequest } from '@hrplatform/utils';

import { InputBlock, GlobalContentDiv, GlobalSearchDiv } from './styled';
import { IContentGlobal, IPersonInfoGlobalSearch } from './types';

import { TEstimator, TGlobalSearchEstimators } from '@types';

export const http = new HttpRequest(process.env.PLATFORM_HOST, HTTP_SEARCH_USERS.OPTIONS);

type PersonSearchProps = {
  allUsersAdd: TEstimator[];
  setSpinner: (spiner: boolean) => void;
  setUserList: (users: TGlobalSearchEstimators[]) => void;
  role: string;
};

const PersonSearch: React.FC<PersonSearchProps> = ({
  allUsersAdd,
  setSpinner,
  setUserList,
  role,
}) => {
  const $Search = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState<string>('');

  const getData = async (query: string, allUsersAddData: TEstimator[]) => {
    try {
      setSpinner(true);

      const searchStr = encodeURIComponent(query);

      const data =
        (await http.get<IContentGlobal>(
          `${HTTP_SEARCH_USERS.URL}PERSONS?page=0&size=50&query=${searchStr}`
        )) || {};

      const users: IPersonInfoGlobalSearch[] = [];

      /*
				usersChoose - юзеры, которые уже были добавлены
				data?.persons - то что вернул сервис search
			 */

      if (isArrayCount(data?.persons)) {
        data.persons.forEach((person: IPersonInfoGlobalSearch) => {
          // Для списка userList проставляем уже добавленных ранне людей
          // и по полю isFixed меняем input на серую картинку
          allUsersAddData.forEach((user) => {
            if (findUser(user.person, person)) {
              if (user?.role === role) {
                // если мы зашли в группу в которой чел и находится

                // указываем что мы его добавляли ранее
                person.isChecked = true;

                // прописываем ему тип и в DropContent проверяем на TYPE.FIXED
                person.type = user?.type;
              } else {
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

      setUserList(data?.persons || []);
    } catch (err) {
      console.error(err);
    }
  };

  const delayedGetData = useRef(
    debounceFn((query: string, allUsersAddData: TEstimator[]) => {
      if (query.length >= 3) {
        getData(query, allUsersAddData);
      }
    }, 500)
  ).current;

  const onChangeValueSearch = useCallback(
    (value: string) => {
      setSearchValue(value);

      delayedGetData(value, allUsersAdd);
    },
    [delayedGetData, allUsersAdd]
  );

  const handleClickClean = () => {
    setSearchValue('');

    setUserList([]);
  };

  return (
    <GlobalSearchDiv>
      <GlobalContentDiv>
        <MagnifierIcon />

        <InputBlock
          name="searchUsers"
          placeholder="Начните вводить ФИО сотрудника"
          ref={$Search}
          onChange={onChangeValueSearch}
          value={searchValue}
          autoFocus
        />

        {searchValue && <XIcon onClick={handleClickClean} style={{ cursor: 'pointer' }} />}
      </GlobalContentDiv>
    </GlobalSearchDiv>
  );
};

export default PersonSearch;
