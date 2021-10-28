/** @format */

import Modal from "@ant-design/react-native/es/modal";
import { auth } from "../../../../firebase";

export const ModalSignOut = (message) => {
  Modal.alert(message, " ", [
    {
      text: "Cancel",
      onPress: () => {},
      style: "cancel",
    },
    {
      text: "Yes",
      onPress: () => auth.signOut(),
      style: "ok",
    },
  ]);
};
