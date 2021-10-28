/** @format */

import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "@ant-design/react-native/es/modal";
import { Button } from "@ant-design/react-native";
import { AppContext } from "../../context/AppProvider";

export const AppModal = () => {
  const { visibleModal, setVisibleModal } = useContext(AppContext);
  return (
    <Modal popup visible={visibleModal} animationType="slide-up">
      <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
        <Text style={{ textAlign: "center" }}>Ban chua dang ky tai khoan</Text>
      </View>
      <Button type="primary" onPress={() => setVisibleModal(false)}>
        close modal
      </Button>
    </Modal>
  );
};

const styles = StyleSheet.create({});
