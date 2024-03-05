import { StyleSheet, Text, View } from "react-native";
import { NetworkImage } from "../index";
import React from "react";

const Avatar = () => {
  return (
    <View style={styles.container}>
      <View>
        <NetworkImage
          source={
            "https://img7.thuthuatphanmem.vn/uploads/2023/10/15/avatar-trong-sieu-dep_094012197.jpeg"
          }
          width={33}
          height={33}
          borderRadius={50}
          mode={"cover"}
        />
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 10,
  },
});
