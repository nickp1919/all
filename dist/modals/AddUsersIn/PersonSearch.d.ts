import React from 'react';
import { HttpRequest } from '@hrplatform/utils';
import { TEstimator, TGlobalSearchEstimators } from "../../types";
export declare const http: HttpRequest;
declare type PersonSearchProps = {
    allUsersAdd: TEstimator[];
    setSpinner: (spiner: boolean) => void;
    setUserList: (users: TGlobalSearchEstimators[]) => void;
    role: string;
};
declare const PersonSearch: React.FC<PersonSearchProps>;
export default PersonSearch;
