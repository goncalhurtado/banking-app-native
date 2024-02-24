import { Text, View, TouchableOpacity } from "react-native";
import SearchBar from "../components/transfers/SearchBar";
import { useState } from "react";
import { transfersStyle } from "../style/TransfersStyle";
import ActionBtns from "../components/transfers/ActionBtns";
import NewTransfer from "../components/transfers/NewTransfer";

const Transfers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [action, setAction] = useState(false);

  const showMyData = () => {
    console.log("Show my data");
  };
  return (
    <View style={transfersStyle.container}>
      {!action ? (
        <>
          <View style={transfersStyle.header}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <TouchableOpacity style={{ width: "30%" }} onPress={showMyData}>
              <Text style={transfersStyle.btnSimple}>Mis Datos</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ActionBtns setAction={setAction} />
          </View>
        </>
      ) : (
        <NewTransfer setAction={setAction} />
      )}
    </View>
  );
};

export default Transfers;
