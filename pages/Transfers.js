import { Text, View, TouchableOpacity } from "react-native";
import SearchBar from "../components/transfers/SearchBar";
import { useState, useEffect, useContext } from "react";
import { transfersStyle } from "../style/TransfersStyle";
import ActionBtns from "../components/transfers/ActionBtns";
import NewTransfer from "../components/transfers/NewTransfer";
import { axiosInstance } from "../config/axiosInstance";
import Contacts from "../components/transfers/contacts/Contacts";
import UserContext from "../context/userContext";

const Transfers = ({ setHideAppbar }) => {
  const user = useContext(UserContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [action, setAction] = useState(false);
  const [contact, setContact] = useState({
    selected: false,
  });
  const [contactsData, setContactsData] = useState([]);

  const getContactData = async () => {
    try {
      const response = await axiosInstance.get(`/contacts/${user._id}`);
      const { data } = response.data;
      setContactsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setHideAppbar(action);
    getContactData();
    if (contact.selected) {
      setAction(true);
    }
  }, [action, contact.selected]);
  return (
    <View style={transfersStyle.container}>
      <View>
        {!action ? (
          <>
            <View style={transfersStyle.header}>
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <TouchableOpacity style={{ width: "30%" }}>
                <Text style={transfersStyle.btnSimple}>Mis Datos</Text>
              </TouchableOpacity>
            </View>
            <View>
              <ActionBtns setAction={setAction} />
            </View>
            <View style={{ padding: 10 }}>
              <Text>Contactos</Text>
              <Contacts data={contactsData} setContact={setContact} />
            </View>
          </>
        ) : (
          <NewTransfer
            setAction={setAction}
            setHideAppbar={setHideAppbar}
            contact={contact}
            setContact={setContact}
          />
        )}
      </View>
    </View>
  );
};

export default Transfers;
