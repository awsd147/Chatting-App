/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ROUTE_KEYS } from ".";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();
export function AuthorizedRoutes() {
  return (
    <Stack.Navigator initialRouteName={ROUTE_KEYS.HOME}>
      <Stack.Screen name={ROUTE_KEYS.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}
