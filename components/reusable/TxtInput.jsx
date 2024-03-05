import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TxtInput = ({ value, onChangeText, placeholder }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible(!isVisible);
  };
  const handlePressOut = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.txtInput, { paddingTop: isVisible ? 5 : 0 }]}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={!isVisible ? placeholder : ""}
        onFocus={handlePress}
        onBlur={handlePressOut}
      />
      {isVisible ? <Text style={styles.txt}>{placeholder}</Text> : null}
    </View>
  );
};

export default TxtInput;

const styles = StyleSheet.create({
  container: {
    borderColor: "#757171",
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 2,
    borderRadius: 9,
  },
  txtInput: {
    borderColor: "black",
    paddingHorizontal: 10,
    fontSize: 17,
  },
  txt: {
    position: "absolute",
    left: 10,
    top: 1,
    fontFamily: "OpenSans",
  },
});
