import axios from "axios";
import { BASE_URL } from "./../../config";
import { put, takeEvery } from 'redux-saga/effects';
import { getColumnsSuccess } from "./../slices/columnSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

function* getColumnsWorker():any {
  let columns: any
  let token = yield AsyncStorage.getItem("token")
  console.log(token, 'getToken');
  yield axios.get(`${BASE_URL}/columns`, {headers: {'Authorization': `Bearer ${token}`}})
    .then((res) => {
      columns = res.data
    })
    .catch(err => {
      console.log(err);
    })
  if (columns) {
    yield put(getColumnsSuccess(columns))
  }
}

export function* getColumnsWather() {
  yield takeEvery('columns/getColumnsRequire', getColumnsWorker)
}
