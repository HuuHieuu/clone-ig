import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import React, { useRef, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
const Check = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  //   useEffect(() => {
  //     Animated.sequence([
  //       Animated.timing(spinValue, {
  //         toValue: 1,
  //         duration: 2000,
  //         easing: Easing.linear,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(spinValue, {
  //         toValue: 0,
  //         duration: 0,
  //         useNativeDriver: true,
  //       }),
  //     ]).start();
  //   }, []);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.content, { transform: [{ rotate: spin }] }]}
      >
        <AntDesign name="checkcircleo" size={45} color="black" />
      </Animated.View>
      <Text style={styles.txt}>Bạn đã xem hết rồi</Text>
    </View>
  );
};

export default Check;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  txt: {
    fontSize: 20,
    marginTop: 5,
    fontFamily: "PlayfairDisplay",
  },
});
