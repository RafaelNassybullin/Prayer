import { put, takeEvery } from 'redux-saga/effects';
import axios from "axios";
import { BASE_URL } from "./../../config";
import { registerFailed, registerSuccess, loginSuccess, loginFailed } from './../slices/loginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getColumnsRequire } from './../slices/columnSlice';

function* registerWorkers(action: any) {
  let data: any
  let token: string
  yield AsyncStorage.removeItem("token")
  yield axios.post(`${BASE_URL}/auth/sign-up`, action.payload)
    .then((res) => {
      if (res.data.name !== 'QueryFailedError') {
        data = res.data
        token = res.data.token
        AsyncStorage.setItem("token", token);
      }
      AsyncStorage.setItem("userInfo", JSON.stringify(data));
    })
    .catch((e) => {
      console.log('error', e);
    })

  if (data) {
    yield put(registerSuccess(data))
    yield put(getColumnsRequire())
  } else {
    yield put(registerFailed())
  }
}

function* loginWorkers(action: any) {
  let data:any, token: any
  yield AsyncStorage.removeItem("token")
  yield axios.post(`${BASE_URL}/auth/sign-in`, action.payload)
    .then((res) => {
      if (res.data.name !== 'EntityNotFound') {
        data = res.data
        token = res.data.token
        AsyncStorage.setItem("token", token);
      }
      AsyncStorage.setItem("userInfo", JSON.stringify(data));
    })
    .catch((e) => {
      console.log('error', e);
    })
  if (data) {
    yield put(loginSuccess(data))
    yield put(getColumnsRequire())
  } else {
    yield put(loginFailed())
  }
}

export function* registerWatchers() {
  yield takeEvery('login/registerRequired', registerWorkers)
}

export function* loginWatchers() {
  yield takeEvery('login/loginRequired', loginWorkers)
}
