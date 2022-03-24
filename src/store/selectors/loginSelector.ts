import { RootState } from "./../index";

export const registerDataSelect = (state:RootState)=>state.auth.registerDatas
export const registerErrorSelect = (state:RootState)=>state.auth.error
export const loginErrorSelect = (state:RootState)=>state.auth.loginError
export const registerLoadingSelect = (state:RootState)=>state.auth.loading

