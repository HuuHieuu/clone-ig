import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const ReusableBtn = ({
  text,
  onPress,
  width,
  height,
  borderWidth,
  radius,
  fontFamily,
  size,
  color,
  backgroundColor,
  brcolor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(
        width,
        height,
        borderWidth,
        radius,
        backgroundColor,
        brcolor
      )}
    >
      <Text style={styles.btnText(fontFamily, size, color)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({
  btnStyle: (width, height, borderWidth, radius, backgroundColor, brcolor) => ({
    backgroundColor: backgroundColor,
    width: width,
    height: height,
    borderColor: brcolor,
    borderWidth: borderWidth,
    borderRadius: radius,
    justifyContent: "center",
    alignItems: "center",
  }),
  btnText: (fontFamily, size, color) => ({
    fontFamily: fontFamily,
    fontSize: size,
    color: color,
  }),
});
