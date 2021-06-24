export declare class MockStoreCreator<T> {
    private reducer;
    private initialState;
    private mockStore;
    private localStore;
    constructor(reducer: (state: T, action: any) => T, initialState: T);
    private readonly handler;
    getState: () => any;
    dispatch: (action: any) => any;
    resetStore: () => void;
}
