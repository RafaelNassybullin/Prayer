import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import { store } from "./store/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isLoggedIn } from "./store/slices/loginSlice";

const App = () => {



  return (
    <Provider store={store}>
      <StatusBar translucent hidden={true}/>
      <Navigation/>
    </Provider>
  );
};

export default App;
