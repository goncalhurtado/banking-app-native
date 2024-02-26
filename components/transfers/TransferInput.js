import React, { useEffect, useRef, useState } from "react";
import { TextInput, ActivityIndicator, HelperText } from "react-native-paper";
import { TouchableOpacity, View, Text } from "react-native";
import { transfersStyle } from "../../style/TransfersStyle";
import { Keyboard } from "react-native";
import { checkDestination } from "../../helpers/transferHelper";

const TransferInput = ({ newTransfer, setNewTransfer }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    boolean: false,
    message: "",
  });
  const textInputRef = useRef(null);

  const clear = () => {
    setText("");
    setError({
      boolean: false,
      message: "",
    });
  };

  const handleChange = (text) => {
    setText(text.toLowerCase());
    setError({
      boolean: false,
      message: "",
    });
  };

  const handle = async () => {
    Keyboard.dismiss();
    const response = await checkDestination(text, setError, setLoading);
    if (!response) {
      return;
    }
    if (response._id === newTransfer.origin) {
      setError({
        boolean: true,
        message: "No puedes transferirte a ti mismo",
      });
      return;
    }
    setNewTransfer({
      ...newTransfer,
      destination: response._id,
      destinationName: response.name,
      destinationLastname: response.lastname,
    });
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
        onChangeText={handleChange}
        right={<TextInput.Icon icon="close" onPress={clear} />}
        error={error.boolean}
      />
      <HelperText style={{ color: "red" }}>
        {error.boolean && error.message}
      </HelperText>
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
