import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import TransferInput from "./TransferInput";

const NewTransfer = ({ setAction }) => {
  const goBack = () => {
    setAction(false);
  };
  return (
    <View>
      <View style={{ marginBottom: 30 }}>
        <Icon name="arrowleft" size={25} color="#6200EE" onPress={goBack} />
      </View>
      <View>
        <TransferInput />
      </View>
    </View>
  );
};
export default NewTransfer;
