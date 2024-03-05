import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Search, ShortVideo, AddPost, User } from "../../screens";
import { Ionicons, FontAwesome, Entypo, EvilIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              //   color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="search"
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search-sharp" : "search-outline"}
              //   color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="addPost"
        component={AddPost}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="plus-square" size={26} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="reels"
        component={ShortVideo}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Entypo name="video" size={26} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={User}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? "user-circle-o" : "user-circle"}
              size={26}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
