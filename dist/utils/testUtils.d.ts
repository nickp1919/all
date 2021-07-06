export declare class MockStoreCreator<T> {
    private readonly mockStore;
    private localStore;
    private readonly reducer;
    private readonly initialState;
    constructor(reducer: (state: T, action: any) => T, initialState: T);
    private handler;
    getState(): T;
    dispatch(action: any): any;
    resetStore(): void;
}
