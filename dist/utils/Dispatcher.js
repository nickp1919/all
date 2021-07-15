const Dispatcher = (store, type = '', payload = {}) => {
    return store.dispatch({
        type,
        payload,
    });
};
export default Dispatcher;
