import { useState, useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import TransferInput from "./TransferInput";
import SetAmount from "./SetAmount";
import UserContext from "../../context/userContext";
import SetNoteAndConfirm from "./SetNoteAndConfirm";
import CheckoutTransfer from "./CheckoutTransfer";

const NewTransfer = ({ setAction, setHideAppbar }) => {
  const user = useContext(UserContext);

  const [step, setStep] = useState(1);

  const [newTransfer, setNewTransfer] = useState({
    origin: user.id,
    destination: "",
    destinationName: "",
    destinationLastname: "",
    notes: "",
    amount: 0,
    done: false,
  });

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setHideAppbar(false);
    } else {
      setAction(false);
    }
  };

  return (
    <View>
      {!newTransfer.done ? (
        <View>
          <View style={{ marginBottom: 30 }}>
            <Icon name="arrowleft" size={25} color="#6200EE" onPress={goBack} />
          </View>
          <View>
            {step === 1 && (
              <TransferInput
                setNewTransfer={(value) => {
                  setNewTransfer(value);
                  setStep(2);
                }}
                newTransfer={newTransfer}
              />
            )}
            {step === 2 && (
              <SetAmount
                newTransfer={newTransfer}
                setNewTransfer={(value) => {
                  setNewTransfer(value);
                  setStep(3);
                }}
              />
            )}
            {step === 3 && (
              <SetNoteAndConfirm
                newTransfer={newTransfer}
                setNewTransfer={setNewTransfer}
              />
            )}
          </View>
        </View>
      ) : (
        <CheckoutTransfer data={newTransfer} />
      )}
    </View>
  );
};
export default NewTransfer;
