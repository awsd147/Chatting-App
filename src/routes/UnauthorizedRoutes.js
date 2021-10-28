/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ROUTE_KEYS } from ".";
import SignInScreen from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();
export function UnauthorizedRoutes() {
  return (
    <Stack.Navigator initialRouteName={ROUTE_KEYS.SIGN_IN}>
      <Stack.Screen name={ROUTE_KEYS.SIGN_IN} component={SignInScreen} />
    </Stack.Navigator>
  );
}
