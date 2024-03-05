import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AppBar, NetworkImage } from "../../components";
import { MyPost, MySVideo, MyTag } from "../../screens";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const User = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ flex: 1 }}>
        <AppBar
          iconLeft={"plus"}
          iconRight={"bars"}
          isUser={true}
          userName={"huuhieu19"}
        />
        <View style={styles.containerTop}>
          <View style={styles.contentLeft}>
            <View style={styles.avatar}>
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
            <View style={styles.desc}>
              <Text style={styles.txt}>huuhieu</Text>
              <Text style={styles.txt}>description</Text>
            </View>
          </View>
          <View style={styles.contentRight}>
            <TouchableOpacity style={styles.contentRightDsc}>
              <Text>0</Text>
              <Text style={styles.textRight}>Bài viết</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentRightDsc}>
              <Text>0</Text>
              <Text style={styles.textRight}>Người theo dõi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentRightDsc}>
              <Text>0</Text>
              <Text style={styles.textRight}>Đang theo dõi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "#333333", flex: 3 }}>
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: {
              backgroundColor: "black",
              height: 1,
            },
          }}
        >
          <Tab.Screen
            name="MyPost"
            component={MyPost}
            options={{
              tabBarShowLabel: false,
              headerShown: false,

              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                  name="grid-on"
                  size={26}
                  color={focused ? "black" : "gray"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="MyVideo"
            component={MySVideo}
            options={{
              tabBarShowLabel: false,
              headerShown: false,

              tabBarIcon: ({ focused }) => (
                <Entypo
                  name="video"
                  size={26}
                  color={focused ? "black" : "gray"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="MyTag"
            component={MyTag}
            options={{
              tabBarShowLabel: false,
              headerShown: false,

              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                  name="video-collection"
                  size={26}
                  color={focused ? "black" : "gray"}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  containerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 14,
  },
  desc: {
    marginTop: 5,
  },
  txt: {
    fontSize: 15,
    marginVertical: 1,
  },
  contentRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentRightDsc: {
    alignItems: "center",
    alignContent: "space-around",
    marginHorizontal: 6,
    marginBottom: "12%",
  },
  textRight: {
    fontSize: 12.5,
  },
});
