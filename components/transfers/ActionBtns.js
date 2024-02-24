import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { transfersStyle } from "../../style/TransfersStyle";

const ActionBtns = ({ setAction }) => {
  const btnsData = [
    {
      icon: "pluscircleo",
      text: "Nueva",
      action: "new",
    },
    {
      icon: "qrcode",
      text: "Leer QR",
      action: "qr",
    },
    {
      icon: "profile",
      text: "Mis Datos",
      action: "mydata",
    },
  ];

  const handleAction = (action) => {
    setAction(action);
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      {btnsData.map((data, index) => (
        <TouchableOpacity
          key={index}
          style={
            data.text === "Nueva"
              ? transfersStyle.button
              : transfersStyle.buttonSecondary
          }
          onPress={() => handleAction(data.action)}
        >
          <Icon
            name={data.icon}
            size={30}
            color={data.text === "Nueva" ? "white" : "#6200EE"}
            style={transfersStyle.icon}
          />
          <Text
            style={
              data.text === "Nueva"
                ? transfersStyle.textOnBtn
                : transfersStyle.textOnBtnSec
            }
          >
            {data.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ActionBtns;
