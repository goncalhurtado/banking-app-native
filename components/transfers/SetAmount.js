import { useContext, useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import BalanceContext from "../../context/balanceContext";
import { amountStyle } from "../../style/TransfersStyle";
import DestinationHeader from "./DestinationHeader";

const SetAmount = ({ newTransfer, setNewTransfer }) => {
  const { destinationName, destinationLastname } = newTransfer;

  const { balance } = useContext(BalanceContext);

  const [insufficientFunds, setInsufficientFunds] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleChange = (amount) => {
    setAmount(amount);
    if (amount > balance) {
      setInsufficientFunds(true);
    } else {
      setInsufficientFunds(false);
    }
  };

  const handle = () => {
    setNewTransfer({
      ...newTransfer,
      amount,
    });
  };

  return (
    <>
      <DestinationHeader
        name={destinationName}
        lastname={destinationLastname}
        balance={balance}
      />
      <View>
        <TextInput
          style={[
            amountStyle.amount,
            { color: insufficientFunds ? "red" : "black" },
          ]}
          keyboardType="numeric"
          onChangeText={handleChange}
          autoFocus={true}
        />
      </View>
      <TouchableOpacity
        style={[
          amountStyle.btn,
          { backgroundColor: insufficientFunds ? "red" : "#6200EE" },
        ]}
        disabled={insufficientFunds}
        onPress={handle}
      >
        <Text style={{ color: "white" }}>Confirmar Monto</Text>
      </TouchableOpacity>
    </>
  );
};
export default SetAmount;
