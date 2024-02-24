import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import TransferInput from "./TransferInput";
import SetAmount from "./SetAmount";

const NewTransfer = ({ setAction }) => {
  const [newTransfer, setNewTransfer] = useState({
    origin: "",
    destination: "",
    notes: "",
    amount: 0,
    done: false,
  });
  const goBack = () => {
    setAction(false);
  };
  return (
    <View>
      <View style={{ marginBottom: 30 }}>
        <Icon name="arrowleft" size={25} color="#6200EE" onPress={goBack} />
      </View>
      <View>
        {newTransfer.destination === "" ? (
          <>
            <TransferInput
              setNewTransfer={setNewTransfer}
              newTransfer={newTransfer}
            />
          </>
        ) : (
          <SetAmount setNewTransfer={setNewTransfer} />
        )}
      </View>
    </View>
  );
};
export default NewTransfer;
