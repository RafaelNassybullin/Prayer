import React from "react";
import { StatusBar } from "react-native";
import Navigation from "./components/Navigation";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <StatusBar translucent hidden={true}/>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
