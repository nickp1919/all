import React from 'react';
import { TEstimatedPerson, TGlobalSearchEstimators } from "../../types";
import { IPersonInfoGlobalSearch } from "./types";
declare const SelectedPerson: React.FC<{
    person: Partial<TGlobalSearchEstimators>;
    handleDelete: (uuid: Partial<IPersonInfoGlobalSearch & Partial<TEstimatedPerson>>) => void;
    isFixed?: boolean;
}>;
export default SelectedPerson;
