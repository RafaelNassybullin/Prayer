import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, RegisterScreen, SplashScreen } from "./../screens";
import { AuthContext } from "./../context/AuthContext";

export type RootStackParamList = {
  SplashScreen: undefined;
  Todo: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);

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
