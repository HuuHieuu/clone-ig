import { StyleSheet, Image } from "react-native";
import React from "react";

const NetworkImage = ({ source, width, height, borderRadius, mode }) => {
  return (
    <Image
      source={{ uri: source }}
      style={styles.image(width, height, borderRadius, mode)}
    />
  );
};

export default NetworkImage;

const styles = StyleSheet.create({
  image: (width, height, borderRadius, mode) => ({
    padding: 4,
    borderColor: "#8D4949",
    borderWidth: 1.4,
    width: width,
    height: height,
    borderRadius: borderRadius,
    resizeMode: mode,
  }),
});
