import { AnyAction, applyMiddleware, combineReducers, createStore, Reducer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { put, CallEffect } from 'redux-saga/effects';

import { isArrayCount } from '@utils';

import { showErrorMessage } from '@store/actions/_common.action';

export type TStates = any;

type TAsyncReducers = { [key: string]: Reducer<TStates, AnyAction> };

export interface IExtStore extends Store {
  asyncReducers?: TAsyncReducers;
}

/** Динамическое подключение редьюсеров */
export function createReducer(asyncReducers: TAsyncReducers) {
  return combineReducers({
    ...asyncReducers,
  });
}

const initReducer = (state: TStates, action: AnyAction) => ({});

/** Универсальный store для всех приложений */
export function configureStore(middleware: any) {
  const store: IExtStore = createStore(
    createReducer({ initReducer: initReducer as Reducer<TStates, AnyAction> }),
    composeWithDevTools(applyMiddleware(middleware))
  );

  store.asyncReducers = {};

  return store;
}

type TReducer = {
  name: string;
  reducer: Reducer<TStates, AnyAction>;
};

/** Функция для подключения редьюсеров в проект */
export function injectAsyncReducers(store: IExtStore, reducers: Array<TReducer>) {
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
export function* safe(effect: CallEffect<unknown>, errorAction?: Function): Iterator<object> {
  try {
    return { result: yield effect, error: null };
  } catch (error) {
    if (errorAction) {
      yield errorAction(error);
    }

    yield put(showErrorMessage(error));

    return { result: null, error };
  }
}
