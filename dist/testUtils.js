import configureMockStore from 'redux-mock-store';
export class MockStoreCreator {
    constructor(reducer, initialState) {
        this.reducer = reducer;
        this.initialState = initialState;
        this.handler = (actions) => actions.reduce((state, action) => this.reducer(state, action), this.initialState);
        this.getState = () => this.localStore.getState();
        this.dispatch = (action) => this.localStore.dispatch(action);
        this.resetStore = () => {
            this.localStore = this.mockStore(this.handler);
        };
        this.mockStore = configureMockStore();
        this.initialState = initialState;
        this.reducer = reducer;
        this.localStore = this.mockStore(this.handler);
    }
}
