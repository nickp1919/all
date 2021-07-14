const initials = (person) => `${person.firstName && person.firstName[0]}${person.lastName && person.lastName[0]}`.toUpperCase();
export default initials;
