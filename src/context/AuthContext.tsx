import React, { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface props {
  children: JSX.Element | JSX.Element[]
}

type AuthContextProps = {
  register: (name: string, email: string, password: string) => void
  login: (email: string, password: string) => void
  logout: () => void
  splashLoading: boolean
  addColumn: boolean
  loginIsValid: string
  registerIsValid: string
  openAddColumnHandler: () => void
  userInfo: any
  isLoading: boolean
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: props) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [splashLoading, setSplashLoading] = useState<boolean>(false);
  const [loginIsValid, setLoginIsValid] = useState<string>('');
  const [registerIsValid, setRegisterIsValid] = useState<string>('');
  const [addColumn, setAddColumn] = useState<boolean>(false)

  const register = (name: string, email: string, password: string) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/auth/sign-up`, {email, name, password})
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        if(userInfo.name === 'QueryFailedError'){
          setRegisterIsValid('User with this email address already exists')
        }else{
          setRegisterIsValid('')
        }
        console.log(userInfo.name);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log("error", e);
      })
      .finally(() => {
        console.log(name, email, password);
      });
  };
  const login = (email: string, password: string) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/auth/sign-in`, {email, password})
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo.name);
        if(userInfo.name==='EntityNotFound'){
          setLoginIsValid('Incorrect login or password')
        }else{
          setLoginIsValid('')
        }
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("login error", e);
        setIsLoading(false);
      });
  };
  const logout = () => {
    setUserInfo({});
    AsyncStorage.removeItem("userInfo");
  };
  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo:any = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
      }
      setSplashLoading(false);
    } catch (error) {
      console.log("is logged error", error);
    }
  };
  const openAddColumnHandler = () => {
    setAddColumn(!addColumn)
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{
      register,
      login,
      logout,
      openAddColumnHandler,
      addColumn,
      loginIsValid,
      splashLoading,
      registerIsValid,
      userInfo,
      isLoading,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

