import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NetworkImage } from "../../components";

const SearchSuggest = () => {
  return (
    <TouchableOpacity>
      <View>
        <NetworkImage
          source={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU"
          }
          width={120}
          height={120}
          mode={"cover"}
          borderRadius={4}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SearchSuggest;

const styles = StyleSheet.create({});
