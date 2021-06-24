const getRandomString = () => {
  return 'f' + Math.random().toString(36).substr(2, 12);
};

export default getRandomString;
