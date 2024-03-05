import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

const EmoState = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.btn}>
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome name="comment-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Entypo name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome name="bookmark-o" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmoState;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  btn: {
    marginRight: 15,
  },
});
