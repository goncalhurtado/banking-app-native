import { useContext, useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import BalanceContext from "../../context/balanceContext";
import { setInitials } from "../../helpers/fromatInfo";
import { Avatar } from "react-native-paper";
import { set } from "date-fns";
import { amountStyle } from "../../style/TransfersStyle";
import SetNoteAndConfirm from "./SetNoteAndConfirm";

const SetAmount = ({ newTransfer, setNewTransfer }) => {
  const { destinationName, destinationLastname } = newTransfer;
  const { balance } = useContext(BalanceContext);
  const [insufficientFunds, setInsufficientFunds] = useState(false);
  const [amount, setAmount] = useState(0);

  const fullName = `${destinationName} ${destinationLastname}`;
  const initials = setInitials(fullName);

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
      <View style={amountStyle.container}>
        <View style={amountStyle.destinationContainer}>
          <Avatar.Text size={50} label={initials} backgroundColor="#6200EE" />
          <Text style={amountStyle.name}>{fullName}</Text>
          <Text style={amountStyle.balance}>Tu saldo: ${balance}</Text>
        </View>
        {newTransfer.amount === 0 ? (
          <>
            <View>
              <TextInput
                style={[
                  amountStyle.amount,
                  { color: insufficientFunds ? "red" : "black" },
                ]}
                keyboardType="numeric"
                onChangeText={handleChange}
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
        ) : (
          <>
            <SetNoteAndConfirm
              newTransfer={newTransfer}
              setNewTransfer={setNewTransfer}
            />
          </>
        )}
      </View>
    </>
  );
};
export default SetAmount;
