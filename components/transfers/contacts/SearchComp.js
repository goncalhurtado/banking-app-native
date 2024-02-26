import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { transfersStyle } from "../../../style/TransfersStyle";
import { Searchbar } from "react-native-paper";

const SearchComp = ({ search, setSearch }) => {
  return (
    <>
      <View style={{ width: "70%" }}>
        <Searchbar placeholder="Search" />
      </View>
      <TouchableOpacity style={{ width: "30%" }}>
        <Text style={transfersStyle.btnSimple}>Buscar</Text>
      </TouchableOpacity>
    </>
  );
};

export default SearchComp;
