import { StyleSheet, Image } from "react-native";
import React from "react";

const AssetImage = ({ width, height, mode, radius, data }) => {
  return (
    <Image source={data} style={styles.img(width, height, mode, radius)} />
  );
};

export default AssetImage;

const styles = StyleSheet.create({
  img: (width, height, mode, radius) => ({
    width: width,
    height: height,
    resizeMode: mode,
    borderRadius: radius,
  }),
});
