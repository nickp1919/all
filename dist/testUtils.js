import configureMockStore from 'redux-mock-store';
export class MockStoreCreator {
    mockStore;
    localStore;
    reducer;
    initialState;
    constructor(reducer, initialState) {
        this.mockStore = configureMockStore();
        this.initialState = initialState;
        this.reducer = reducer;
        this.localStore = this.mockStore(this.handler);
    }
    handler(actions) {
        return actions.reduce((state, action) => this.reducer(state, action), this.initialState);
    }
    getState() {
        return this.localStore.getState();
    }
    dispatch(action) {
        return this.localStore.dispatch(action);
    }
    resetStore() {
        this.localStore = this.mockStore(this.handler);
    }
}
