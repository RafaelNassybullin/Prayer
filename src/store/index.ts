import { loginReducer } from "./slices/loginSlice";
import { columnReducer } from "./slices/columnSlice";
import createSagaMiddleware from 'redux-saga'
import { registerWatchers, loginWatchers } from "./sagas/authSaga";
import { all, fork } from 'redux-saga/effects';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

function* RootSaga() {
  yield all([
    fork(registerWatchers),
    fork(loginWatchers),
    // fork(isLoggedWatchers)
  ]);
}

export const store = configureStore({
  reducer: {
    auth: loginReducer,
    columns: columnReducer,
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
})

sagaMiddleware.run(RootSaga);
export type RootState = ReturnType<typeof store.getState>

