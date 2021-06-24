const dispatcher = (store, type = '', payload = {}) => {
    return store.dispatch({
        type,
        payload,
    });
};
export default dispatcher;
