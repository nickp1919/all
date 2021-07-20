import { ReactNode } from 'react';

export type TRoleInfo = {
  roleType: string;
  title: string;
};

import {
  Dictionary,
  TEstimatedPerson,
  TEstimator,
  TFilteredEstimators,
  TGlobalSearchEstimators,
} from '@types';

export type TAddUsersInProps = {
  visible: boolean;
  onClose: () => void;
  usersChoose: TEstimatedPerson[];
  removeChooseShow?: boolean;
  testId: string;
  roleInfo: TRoleInfo;
  filteredUsers: Dictionary<TFilteredEstimators>;
  searchStubDescription?: ReactNode;
  windowLevel?: number;
  store: any;
};

export interface IPersonsContent extends Partial<TGlobalSearchEstimators> {
  personId: string;
  fullName: string;
  firstName: string;
  lastName: string;
  midName: string;
  photoDto?: {
    url: string;
    hash: string;
  };
  positionName?: string;
}

export type IPersonInfoGlobalSearch = {
  personUuid: string;
  jposition?: {
    position: Array<{
      funcBlock: string | null;
      fullName: string | null;
    }>;
  };
  pbasic: {
    lastName: string;
    firstName: string;
    fullName: string;
    midName: string;
  };
  pbasicphoto: {
    hash?: string;
    url?: string;
  };
  isChecked?: boolean;
  isFixed?: boolean;
  type?: string;
  isExternal?: boolean;
};

export type IContentGlobal = {
  persons: IPersonInfoGlobalSearch[];
};

export type IDropContent = {
  findNowUsers: IPersonInfoGlobalSearch[];
  usersChoose: IPersonInfoGlobalSearch[];
  addChoosePerson: (person: TGlobalSearchEstimators) => void;
  removeChoosePerson: (person: TGlobalSearchEstimators) => void;
  removeChooseShow?: boolean;
  checkedAll: boolean;
  handledCheckedAll: Function;
  stubDescription?: ReactNode;
};

export type TAddUsersInState = {
  searchValue: string;
  usersChoose: TEstimatedPerson[];
  findNowUsers: IPersonInfoGlobalSearch[];
  spinner: boolean;
  disabled: boolean;
  removedUsers: TGlobalSearchEstimators[];
  initialValues: SelectedPersonType;
  checkedAll: boolean;
  allUsersAdd: TEstimator[];
};

export type SelectedPersonType = {
  [key: string]: boolean;
};

export type GlobalSearch = {
  onChoosePerson: (users: IPersonInfoGlobalSearch[]) => void;
  onClose: Function;
  assignment?: any;
  removeChooseShow?: boolean;
  chooseUsers: IPersonInfoGlobalSearch[];
  testId: string;
  onConfirm: any;
  role: string;
  filteredUsers: Dictionary<TFilteredEstimators>;
  stubDescription?: ReactNode;
};
