import { useState } from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={{ width: "70%" }}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchBar;
