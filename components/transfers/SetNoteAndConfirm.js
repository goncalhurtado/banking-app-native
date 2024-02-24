import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";

const SetNoteAndConfirm = ({ newTransfer, setNewTransfer }) => {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    boolean: false,
    message: "",
  });
  const textInputRef = useRef(null);

  const handleChange = (text) => {
    setText(text);
    setError({
      boolean: false,
      message: "",
    });
  };
  const handle = () => {
    setNewTransfer({
      ...newTransfer,
      notes: note,
    });
  };

  return (
    <View style={{ height: "100%", backgroundColor: "red" }}>
      <TextInput
        ref={textInputRef}
        label="Mensaje"
        value={note}
        onChangeText={handleChange}
        error={error.boolean}
      />

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={handle}>
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Enviar
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SetNoteAndConfirm;
