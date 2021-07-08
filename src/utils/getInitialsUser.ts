import { isString } from '@utils-lib';

const getInitialsUser = (firstName: string, lastName: string) => {
  const initialsUser = `${isString(firstName) && firstName[0]}${isString(lastName) && lastName[0]}`;

  return initialsUser.toUpperCase();
};

export default getInitialsUser;
