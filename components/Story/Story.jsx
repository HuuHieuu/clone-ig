import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NetworkImage } from "../index";

const Story = () => {
  return (
    <View style={styles.container}>
      <View>
        <NetworkImage
          source={
            "https://img7.thuthuatphanmem.vn/uploads/2023/10/15/avatar-trong-sieu-dep_094012197.jpeg"
          }
          width={75}
          height={75}
          borderRadius={50}
          mode={"cover"}
        />
      </View>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
});
