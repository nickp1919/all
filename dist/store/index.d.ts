import { AnyAction, Reducer, Store } from 'redux';
import { CallEffect } from 'redux-saga/effects';
export declare type TStates = any;
declare type TAsyncReducers = {
    [key: string]: Reducer<TStates, AnyAction>;
};
export interface IExtStore extends Store {
    asyncReducers?: TAsyncReducers;
}
/** Динамическое подключение редьюсеров */
export declare function createReducer(asyncReducers: TAsyncReducers): Reducer<import("redux").CombinedState<{
    [x: string]: any;
}>, AnyAction>;
/** Универсальный store для всех приложений */
export declare function configureStore(middleware: any): IExtStore;
declare type TReducer = {
    name: string;
    reducer: Reducer<TStates, AnyAction>;
};
/** Функция для подключения редьюсеров в проект */
export declare function injectAsyncReducers(store: IExtStore, reducers: Array<TReducer>): void;
/** Концепция работы с запросами */
export declare function safe(effect: CallEffect<unknown>, errorAction?: Function): Iterator<object>;
export {};
