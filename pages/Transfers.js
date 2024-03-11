import { Text, View, TouchableOpacity } from "react-native";
import SearchComp from "../components/transfers/contacts/SearchComp";
import { useState, useEffect, useContext } from "react";
import { transfersStyle } from "../style/TransfersStyle";
import ActionBtns from "../components/transfers/ActionBtns";
import NewTransfer from "../components/transfers/NewTransfer";
import { axiosInstance } from "../config/axiosInstance";
import Contacts from "../components/transfers/contacts/Contacts";
import UserContext from "../context/userContext";
import MyAccountData from "../components/MyAccountData";
import { useNavigate } from "react-router-native";

const Transfers = ({ setHideAppbar }) => {
  const { user } = useContext(UserContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [action, setAction] = useState(false);
  const [contactsData, setContactsData] = useState([]);
  const [contact, setContact] = useState({
    selected: false,
  });

  const getContactData = async () => {
    try {
      const response = await axiosInstance.get(`/contacts/${user._id}`);
      const { data } = response.data;
      setContactsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // const navigate = useNavigate();

  useEffect(() => {
    setHideAppbar(action);
    getContactData();
    if (contact.selected) {
      setAction("new");
    }
  }, [action, contact.selected]);
  return (
    <View style={transfersStyle.container}>
      <View>
        {!action && (
          <>
            <View style={transfersStyle.header}>
              <SearchComp />
            </View>
            <View>
              <ActionBtns setAction={setAction} />
            </View>
            <View style={{ padding: 10 }}>
              <Text>Contactos</Text>
              <Contacts data={contactsData} setContact={setContact} />
            </View>
          </>
        )}
        {action === "new" && (
          <NewTransfer
            setAction={setAction}
            setHideAppbar={setHideAppbar}
            contact={contact}
            setContact={setContact}
          />
        )}
        {action === "mydata" && <MyAccountData setAction={setAction} />}
      </View>
    </View>
  );
};

export default Transfers;
