import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { TxtInput, ReusableBtn, AssetImage } from "../../components";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (newValue) => {
    setUsername(newValue);
  };

  const handlePasswordChange = (newValue) => {
    setPassword(newValue);
  };
  return (
    <LinearGradient
      colors={["#F1DBEB", "#CEE4F3"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView
          style={{
            flex: 1,
            marginHorizontal: 20,
            marginTop: "45%",
          }}
        >
          <View style={{ alignItems: "center", marginBottom: "20%" }}>
            <AssetImage
              data={require("../../assets/images/instagramIcon.png")}
              width={80}
              height={80}
            />
          </View>

          <TxtInput
            value={username}
            onChangeText={(newValue) => handleUsernameChange(newValue)}
            placeholder={"Tên người dùng/email/số di động"}
          />
          <View style={{ height: 14 }}></View>
          <TxtInput
            value={password}
            onChangeText={(newValue) => handlePasswordChange(newValue)}
            placeholder={"Mật khẩu"}
          />
          <View style={{ height: 20 }}></View>

          <ReusableBtn
            text={"Đăng nhập"}
            height={40}
            backgroundColor={"#1267C2"}
            color={"white"}
            radius={15}
            onPress={() => navigation.navigate("BottomTabNavigator")}
          />

          <ReusableBtn
            text={"Bạn quên mật khẩu ư?"}
            height={40}
            color={"black"}
          />

          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <ReusableBtn
              text={"Tạo tài khoản mới"}
              height={40}
              color={"#1267C2"}
              radius={15}
              brcolor={"#1267C2"}
              borderWidth={1}
              onPress={() => navigation.navigate("register")}
            />

            <AssetImage
              data={require("../../assets/images/metaLogo.png")}
              height={60}
              mode={"contain"}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({});
