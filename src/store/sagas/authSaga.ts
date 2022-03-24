import { put, takeEvery } from 'redux-saga/effects';
import axios from "axios";
import { BASE_URL } from "./../../config";
import { registerFailed, registerSuccess, loginSuccess, loginFailed } from './../slices/loginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* registerWorkers(action: any) {
  let data: any
  yield axios.post(`${BASE_URL}/auth/sign-up`, action.payload)
    .then((res) => {
      if (res.data.name !== 'QueryFailedError') {
        data = res.data
      }
      AsyncStorage.setItem("userInfo", JSON.stringify(data));
    })
    .catch((e) => {
      console.log('error', e);
    })
  if (data) {
    yield put(registerSuccess(data))
  } else {
    yield put(registerFailed())
  }
}

function* loginWorkers(action: any) {
  console.log(action.payload);
  let data: any
  yield axios.post(`${BASE_URL}/auth/sign-in`, action.payload)
    .then((res) => {
      if (res.data.name !== 'EntityNotFound') {
        data = res.data
      }
      AsyncStorage.setItem("userInfo", JSON.stringify(data));
    })
    .catch((e) => {
      console.log('error', e);
    })
  if (data) {
    yield put(loginSuccess(data))
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
