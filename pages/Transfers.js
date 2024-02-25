import { Text, View, TouchableOpacity } from "react-native";
import SearchBar from "../components/transfers/SearchBar";
import { useState, useEffect } from "react";
import { transfersStyle } from "../style/TransfersStyle";
import ActionBtns from "../components/transfers/ActionBtns";
import NewTransfer from "../components/transfers/NewTransfer";

const Transfers = ({ setHideAppbar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [action, setAction] = useState(false);

  useEffect(() => {
    setHideAppbar(action);
  }, [action]);

  return (
    <View style={transfersStyle.container}>
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
        </>
      ) : (
        <NewTransfer setAction={setAction} setHideAppbar={setHideAppbar} />
      )}
    </View>
  );
};

export default Transfers;
