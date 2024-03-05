import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React from "react";
import AssetImage from "../reusable/AssetImage";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const AppBar = ({ iconLeft, iconRight, isUser, userName }) => {
  return (
    <View style={styles.container}>
      {!isUser ? (
        <AssetImage
          data={require("../../assets/images/logoIgTxt.png")}
          height={40}
          width={100}
          mode={"contain"}
        />
      ) : (
        <TouchableOpacity>
          <View style={styles.userCon}>
            <Text style={styles.txtAppBar}>{userName}</Text>
            <AntDesign name="down" size={17} color="black" />
          </View>
        </TouchableOpacity>
      )}

      <View style={styles.contentRight}>
        <TouchableOpacity>
          <AntDesign name={iconLeft} size={24} color="black" />
        </TouchableOpacity>
        <View style={{ width: 15 }}></View>
        <TouchableOpacity>
          <FontAwesome5 name={iconRight} size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  contentRight: {
    flexDirection: "row",
  },
  txtAppBar: {
    fontSize: 20,
    marginRight: 3,
  },
  userCon: {
    flexDirection: "row",
    alignItems: "center",
  },
});
