/** @format */

import { useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../firebase";
import { COLOR } from "../libs/common/color";
import { AppContext } from "../libs/context/AppProvider";
import { translate } from "../libs/locales";
import { BASE_STYLES } from "../libs/styles/style";

const container = [
  BASE_STYLES.flex1,
  BASE_STYLES.alignCenter,
  BASE_STYLES.justifyCenter,
  { backgroundColor: COLOR.WHITE },
];
const content = [
  BASE_STYLES.flex1,
  BASE_STYLES.alignCenter,
  BASE_STYLES.justifyCenter,
];
const input = [
  BASE_STYLES.borderTextBox,
  BASE_STYLES.width200,
  BASE_STYLES.padding5,
  BASE_STYLES.paddingLeft15,
  BASE_STYLES.marginBottom10,
  { borderColor: COLOR.GREY },
];
const btn_signIn = [
  BASE_STYLES.borderTextBox,
  BASE_STYLES.padding5,
  BASE_STYLES.marginBottom10,
  BASE_STYLES.width100,
  BASE_STYLES.alignCenter,
  BASE_STYLES.alignSelfCenter,
  {
    borderColor: COLOR.BLUE,
    backgroundColor: COLOR.PRIMARY,
  },
];

const btn_signUp = [
  ...btn_signIn,
  { borderColor: COLOR.GREY, backgroundColor: COLOR.WHITE },
];

export const SignInScreen = () => {
  const [email, setEmail] = useState("huypro1@gmail.com");
  const [password, setPassword] = useState("123456");
  // const { setVisibleModal, isSignOut, setIsSignOut } = useContext(AppContext);
  const { setVisibleModal } = useContext(AppContext);

  const onRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {})
      .catch((error) => error && setVisibleModal(true));
  };

  const onLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {})
      .catch((error) => {
        error && setVisibleModal(true);
      });
  };

  return (
    <View style={container}>
      <ScrollView contentContainerStyle={content}>
        <TextInput
          placeholder={translate.SIGN_IN.EMAIL}
          style={input}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          placeholder={translate.SIGN_IN.PASSWORD}
          secureTextEntry
          style={input}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />

        <TouchableOpacity style={btn_signIn} onPress={onLogin}>
          <Text style={{ color: COLOR.WHITE }}>{translate.SIGN_IN.BTN}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btn_signUp} onPress={onRegister}>
          <Text>{translate.SIGN_IN.REGISTER}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
