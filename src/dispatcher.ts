const dispatcher = (store: any, type = '', payload = {}) => {
  return store.dispatch({
    type,
    payload,
  });
};

export default dispatcher;
