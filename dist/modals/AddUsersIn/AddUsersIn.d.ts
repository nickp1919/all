import { Component } from 'react';
import { TAddUsersInProps, IPersonInfoGlobalSearch, TDispatcher } from './types';
import { TEstimatedPerson, TGlobalSearchEstimators } from "../../types";
export declare function findUser(user: any, person: any): boolean;
export declare function getUserID(user: any): string;
export declare class AddUsersIn extends Component<TAddUsersInProps, any> {
    constructor(props: TAddUsersInProps);
    componentDidUpdate(prevProps: TAddUsersInProps, prevState: any): void;
    setInitialValues(usersChoose: TEstimatedPerson[], findNowUsers: IPersonInfoGlobalSearch[]): {
        [key: string]: boolean;
    };
    addChoosePerson: (person: TGlobalSearchEstimators, usersChoose: TGlobalSearchEstimators[], findNowUsers: TGlobalSearchEstimators[], removedUsers: TGlobalSearchEstimators[]) => void;
    removeChoosePerson: (person: TGlobalSearchEstimators, usersChoose: TEstimatedPerson[], checkedAll: boolean, removedUsers: TGlobalSearchEstimators[]) => void;
    handledCheckedAll: (value: boolean, findNowUsers: TGlobalSearchEstimators[], usersChoose: TEstimatedPerson[]) => void;
    handleSendUsers: (usersChoose: TGlobalSearchEstimators[], removedUsers: TGlobalSearchEstimators[], role: string, onClose: Function, updateUsers: TDispatcher, removerUsers: TDispatcher, namePayload?: string) => void;
    render(): JSX.Element | null;
}
