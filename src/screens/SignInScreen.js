/** @format */

import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLOR } from "../libs/common/color";
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

const SignInScreen = () => {
  console.log();
  return (
    <View style={container}>
      <ScrollView contentContainerStyle={content}>
        <TextInput placeholder={translate.SIGN_IN.EMAIL} style={input} />
        <TextInput
          placeholder={translate.SIGN_IN.PASSWORD}
          secureTextEntry
          style={input}
        />

        <TouchableOpacity style={btn_signIn}>
          <Text style={{ color: COLOR.WHITE }}>{translate.SIGN_IN.BTN}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btn_signUp}>
          <Text>{translate.SIGN_IN.REGISTER}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;
