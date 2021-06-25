export declare class MockStoreCreator<T> {
    private mockStore;
    private localStore;
    private reducer;
    private initialState;
    constructor(reducer: (state: T, action: any) => T, initialState: T);
    private readonly handler;
    getState: () => T;
    dispatch: (action: any) => any;
    resetStore: () => void;
}
