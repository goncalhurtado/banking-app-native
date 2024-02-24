import React, { useEffect, useRef, useState } from "react";
import { TextInput, ActivityIndicator, HelperText } from "react-native-paper";
import { TouchableOpacity, View, Text } from "react-native";
import { transfersStyle } from "../../style/TransfersStyle";
import { Keyboard } from "react-native";
import { axiosInstance } from "../../config/axiosInstance";

const TransferInput = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const textInputRef = useRef(null);

  const handle = () => {
    Keyboard.dismiss();
    checkDestination(text);
  };

  const checkDestination = async (text) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/checkDestination/${text}`);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);

  return (
    <View>
      <TextInput
        ref={textInputRef}
        label="Ingresá el Cvu o ALIAS de destino"
        value={text}
        onChangeText={setText}
        right={<TextInput.Icon icon="close" />}
      />

      <HelperText></HelperText>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={transfersStyle.transferBtn} onPress={handle}>
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Confirmar
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransferInput;
