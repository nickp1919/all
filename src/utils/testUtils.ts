import configureMockStore, {
  MockStoreCreator as TMockStoreCreator,
  MockStoreEnhanced,
} from 'redux-mock-store';

export class MockStoreCreator<T> {
  private readonly mockStore: TMockStoreCreator<T, {}>;
  private localStore: MockStoreEnhanced<T, {}>;
  private readonly reducer: (state: T, action: any) => T;
  private readonly initialState: T;

  constructor(reducer: (state: T, action: any) => T, initialState: T) {
    this.mockStore = configureMockStore<T>();

    this.initialState = initialState;
    this.reducer = reducer;
    this.localStore = this.mockStore(this.handler);
  }

  private handler(actions: any[]) {
    return actions.reduce((state, action) => this.reducer(state, action), this.initialState);
  }

  getState() {
    return this.localStore.getState();
  }

  dispatch(action: any) {
    return this.localStore.dispatch(action);
  }

  resetStore() {
    this.localStore = this.mockStore(this.handler);
  }
}
