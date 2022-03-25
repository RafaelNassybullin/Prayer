import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  email: string
  id: number
  name: string
  token: string
}

const initialLoginSlice = {
  inputRequests: {},
  registerDatas: {} as IUser,
  loading: false,
  error: false,
  loginError: false,
  splashLoading: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialLoginSlice,
  reducers: {
    registerRequired: (state, action: PayloadAction<any>) => {
      state.loading = true
      state.inputRequests = action.payload
      state.error = false
    },
    registerSuccess: (state, action: PayloadAction<any>) => {
      state.registerDatas = action.payload
      state.loading = false
      state.error = false
    },
    registerFailed: (state) => {
      state.error = true
      state.loading = false
    },
    loginRequired: (state, action: PayloadAction<any>) => {
      state.loading = true
      state.inputRequests = action.payload
      state.error = false
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.registerDatas = action.payload
      state.loading = false
      state.loginError = false
    },
    loginFailed: (state) => {
      state.loginError = true
      state.loading = false
    },
    logOut: (state) => {
      state.registerDatas = {} as IUser
      AsyncStorage.removeItem("userInfo");
      AsyncStorage.removeItem("token");
    },
    isLoggedIn: (state, action) => {
      state.registerDatas = action.payload
    },
    splashScreen: (state, action) => {
      state.splashLoading = action.payload
    }
  }
})

export const {
  registerRequired,
  registerSuccess,
  registerFailed,
  loginRequired,
  loginSuccess,
  loginFailed,
  logOut,
  isLoggedIn,
  splashScreen
} = loginSlice.actions

export const loginReducer = loginSlice.reducer
