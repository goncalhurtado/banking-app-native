import { Text, View, TouchableOpacity } from "react-native";
import SearchBar from "../components/transfers/SearchBar";
import { useState, useEffect } from "react";
import { transfersStyle } from "../style/TransfersStyle";
import ActionBtns from "../components/transfers/ActionBtns";
import NewTransfer from "../components/transfers/NewTransfer";
import { axiosInstance } from "../config/axiosInstance";
import Contacts from "../components/transfers/contacts/Contacts";

const Transfers = ({ setHideAppbar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [action, setAction] = useState(false);
  const [contact, setContact] = useState({
    selected: false,
  });
  const [contactsData, setContactsData] = useState([]);

  const user = {
    id: "65d692124964ee4f1fc1a349",
  };

  const getContactData = async () => {
    try {
      const response = await axiosInstance.get(`/contacts/${user.id}`);
      const { data } = response.data;
      setContactsData(data);
      // console.log(contactsData);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(contact, "desde trasnfer");

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
