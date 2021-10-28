/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { default as Provider } from "@ant-design/react-native/es/provider";
import { HomeScreen } from "./src/screens/HomeScreen";
import { SignInScreen } from "./src/screens/SignInScreen";
import { ROUTE_KEYS } from "./src/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./src/libs/context/AuthContext";
import { AppProvider } from "./src/libs/context/AppProvider";
import { AppModal } from "./src/libs/component/modal";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider>
        <AuthProvider>
          <AppProvider>
            <Stack.Navigator>
              <Stack.Screen name={ROUTE_KEYS.HOME} component={HomeScreen} />
              <Stack.Screen
                name={ROUTE_KEYS.SIGN_IN}
                component={SignInScreen}
              />
            </Stack.Navigator>
            <AppModal />
          </AppProvider>
        </AuthProvider>
      </Provider>
    </NavigationContainer>
  );
}
