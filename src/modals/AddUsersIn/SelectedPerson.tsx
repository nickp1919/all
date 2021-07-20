import React from 'react';

import { BUTTON_EXTRA_TYPE } from '@constants';

import { SelectedPersonLi, XIconSvg, SelectedPersonButton } from '@modals/AddUsersIn/styled';
import { TEstimatedPerson, TGlobalSearchEstimators } from '@types';
import { IPersonInfoGlobalSearch } from '@modals/AddUsersIn/types';

const SelectedPerson: React.FC<{
  person: Partial<TGlobalSearchEstimators>;
  handleDelete: (uuid: Partial<IPersonInfoGlobalSearch & Partial<TEstimatedPerson>>) => void;
  isFixed?: boolean;
}> = ({ person, handleDelete, isFixed = false }) => {
  const { firstName, lastName } = person;
  const { CANCEL_BUTTON } = BUTTON_EXTRA_TYPE;

  return (
    <SelectedPersonLi forwardedAs="li">
      {`${firstName} ${lastName}`}

      {!isFixed && (
        <SelectedPersonButton extraType={CANCEL_BUTTON} onClick={() => handleDelete(person)}>
          <XIconSvg />
        </SelectedPersonButton>
      )}
    </SelectedPersonLi>
  );
};

export default SelectedPerson;
