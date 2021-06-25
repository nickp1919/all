import configureMockStore, {
  MockStoreCreator as TMockStoreCreator,
  MockStoreEnhanced,
} from 'redux-mock-store';

export class MockStoreCreator<T> {
  private mockStore: TMockStoreCreator<T, {}>;
  private localStore: MockStoreEnhanced<T, {}>;
  private reducer: (state: T, action: any) => T;
  private initialState: T;

  constructor(reducer: (state: T, action: any) => T, initialState: T) {
    this.mockStore = configureMockStore<T>();

    this.initialState = initialState;
    this.reducer = reducer;
    this.localStore = this.mockStore(this.handler);
  }

  private readonly handler = (actions: any[]) =>
    actions.reduce((state, action) => this.reducer(state, action), this.initialState);

  getState = () => this.localStore.getState();

  dispatch = (action: any) => this.localStore.dispatch(action);

  resetStore = () => {
    this.localStore = this.mockStore(this.handler);
  };
}
