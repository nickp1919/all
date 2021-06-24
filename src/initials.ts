import { DataPerson } from '@hrplatform/utils/src/utils';

const initials = (person: DataPerson) =>
  `${person.firstName && person.firstName[0]}${
    person.lastName && person.lastName[0]
  }`.toUpperCase();

export default initials;
