/** @format */

import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../../firebase";
import { ModalSignOut } from "../libs/component/alert-modal";
import { AuthContext } from "../libs/context/AuthContext";
import { translate } from "../libs/locales";
import { ROUTE_KEYS } from "../routes";

export const HomeScreen = () => {
  const { user } = useContext(AuthContext);

  const onSignOut = () => {
    ModalSignOut("Are you sure to sign out ?");
  };

  return (
    <View>
      <Text> {translate.HOME_PAGE.WELCOME + user.email}</Text>
      <TouchableOpacity onPress={onSignOut}>
        <Text>{translate.HOME_PAGE.SIGN_OUT}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
