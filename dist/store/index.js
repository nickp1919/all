import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { put } from 'redux-saga/effects';
import { isArrayCount } from "../utils";
import { showErrorMessage } from "./actions/_common.action";
/** Динамическое подключение редьюсеров */
export function createReducer(asyncReducers) {
    return combineReducers({
        ...asyncReducers,
    });
}
const initReducer = (state, action) => ({});
/** Универсальный store для всех приложений */
export function configureStore(middleware) {
    const store = createStore(createReducer({ initReducer: initReducer }), composeWithDevTools(applyMiddleware(middleware)));
    store.asyncReducers = {};
    return store;
}
/** Функция для подключения редьюсеров в проект */
export function injectAsyncReducers(store, reducers) {
    if (isArrayCount(reducers)) {
        reducers.forEach((item) => {
            const { name, reducer } = item;
            if (store.asyncReducers) {
                store.asyncReducers[name] = reducer;
            }
        });
    }
    if (store.asyncReducers) {
        store.replaceReducer(createReducer(store.asyncReducers));
    }
}
/** Концепция работы с запросами */
export function* safe(effect, errorAction) {
    try {
        return { result: yield effect, error: null };
    }
    catch (error) {
        if (errorAction) {
            yield errorAction(error);
        }
        yield put(showErrorMessage(error));
        return { result: null, error };
    }
}
