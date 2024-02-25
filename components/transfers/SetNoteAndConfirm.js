import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import { TextInput, ActivityIndicator } from "react-native-paper";
import { useState, useRef, useContext } from "react";
import { transfersStyle, amountStyle } from "../../style/TransfersStyle";
import { makeTransaction } from "../../helpers/transferHelper";
import BalanceContext from "../../context/balanceContext";
import DestinationHeader from "./DestinationHeader";

const SetNoteAndConfirm = ({ newTransfer, setNewTransfer }) => {
  const { destinationName, destinationLastname } = newTransfer;

  const { balance } = useContext(BalanceContext);

  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    boolean: false,
    message: "",
  });
  const textInputRef = useRef(null);

  const handleChange = (note) => {
    setNote(note);
    setError({
      boolean: false,
      message: "",
    });
  };

  const handle = async () => {
    Keyboard.dismiss();

    const updatedTransfer = {
      ...newTransfer,
      notes: note,
    };

    const response = await makeTransaction(
      updatedTransfer,
      setError,
      setLoading
    );
    if (!response) {
      return;
    }
    setNewTransfer({
      ...updatedTransfer,
      done: true,
    });
  };

  return (
    <>
      <DestinationHeader
        name={destinationName}
        lastname={destinationLastname}
        balance={balance}
      />
      <View style={{ height: "100%", width: "100%" }}>
        <Text
          style={[
            amountStyle.amount,
            {
              color: "black",
              textAlign: "center",
              marginBottom: 10,
            },
          ]}
        >
          ${newTransfer.amount}
        </Text>
        <TextInput
          ref={textInputRef}
          label="Mensaje (opcional)"
          value={note}
          onChangeText={handleChange}
          error={error.boolean}
        />
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={handle} style={transfersStyle.transferBtn}>
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                Enviar
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default SetNoteAndConfirm;
