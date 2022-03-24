import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, RegisterScreen, SplashScreen } from "./../screens";
import { useDispatch, useSelector } from "react-redux";
import { registerDataSelect } from "./../store/selectors/loginSelector";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isLoggedIn, splashScreen } from "./../store/slices/loginSlice";

export type RootStackParamList = {
  SplashScreen: undefined;
  Todo: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {

  const dispatch = useDispatch()

  const isLogged = async () => {
    try {
      dispatch(splashScreen(true))
      let userInfo: any = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        dispatch(isLoggedIn(userInfo))
      }
      dispatch(splashScreen(false))
    } catch (error) {
      console.log("is logged error", error);
    }
  };
  useEffect(() => {
    isLogged()
  }, []);

  const userInfo = useSelector(registerDataSelect)
  const splashLoading = false

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          splashLoading ? (<Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{headerShown: false}}
            />)
            : userInfo.token ?
            (<Stack.Screen
              name="Todo"
              component={HomeScreen}
              options={{headerShown: false}}
            />)
            : (
              <>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Register"
                  component={RegisterScreen}
                  options={{headerShown: false}}
                />
              </>
            )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
