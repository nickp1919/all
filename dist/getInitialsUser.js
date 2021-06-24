import { isString } from './';
const getInitialsUser = (firstName, lastName) => {
    const initialsUser = `${isString(firstName) && firstName[0]}${isString(lastName) && lastName[0]}`;
    return initialsUser.toUpperCase();
};
export default getInitialsUser;
