import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import { SearchSuggest } from "../../components";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const handleSearch = (value) => {
    setSearchKey(value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.txtInput}
        placeholder="Search"
        value={searchKey}
        onChangeText={(newValue) => handleSearch(newValue)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.suggest}>
        <SearchSuggest />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  txtInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    height: 36,
    fontSize: 17,
    paddingHorizontal: 12,
  },
  suggest: {
    marginVertical: 10,
  },
});
