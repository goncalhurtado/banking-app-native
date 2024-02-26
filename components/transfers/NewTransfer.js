import { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import TransferInput from "./TransferInput";
import SetAmount from "./SetAmount";
import UserContext from "../../context/userContext";
import SetNoteAndConfirm from "./SetNoteAndConfirm";
import CheckoutTransfer from "./CheckoutTransfer";

const NewTransfer = ({ setAction, setHideAppbar, contact, setContact }) => {
  const user = useContext(UserContext);

  const [step, setStep] = useState(1);

  const [newTransfer, setNewTransfer] = useState({
    origin: user._id,
    destination: "",
    destinationName: "",
    destinationLastname: "",
    notes: "",
    amount: 0,
    done: false,
  });

  const goBack = () => {
    if (!contact.selected && step === 1) {
      setAction(false);
      setHideAppbar(false);
      setStep(1);
      return;
    }

    if (contact.selected && step === 2) {
      setAction(false);
      setHideAppbar(false);
      setStep(1);
      setContact({ selected: false, data: {} });
      return;
    }
    if (!contact.selected && step === 2) {
      setStep(1);
      return;
    }

    if (step === 3) {
      setStep(2);
      return;
    }
  };

  const [data, setData] = useState({});

  useEffect(() => {
    if (contact.selected) {
      setNewTransfer({
        ...newTransfer,
        destination: contact.data._id,
        destinationName: contact.data.name,
        destinationLastname: contact.data.lastname,
      });
      setStep(2);
    }
  }, [contact]);

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
