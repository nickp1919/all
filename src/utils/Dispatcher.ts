const Dispatcher = (store: any, type = '', payload = {}) => {
  return store.dispatch({
    type,
    payload,
  });
};

export default Dispatcher;
