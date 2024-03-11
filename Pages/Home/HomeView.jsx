

import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Accueil from '../accueil/Accueil'
import Notification from '../notifications/Notification'
import Profile from '../profile/Profile'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

// import { SafeAreaView } from "react-native-safe-area-context";


function HomeView() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Accueil") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "information" : "information-outline";
          }else if(route.name === "Profile"){
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "orange",
        headerTransparent: false,
        tabBarInactiveTintColor: "#000000",
        headerTitleAlign: "left",
        headerTitleStyle: {
          textAlign: "left",
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen name="Accueil" component={Accueil}></Tab.Screen>
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
     
    </Tab.Navigator>
  )
}

export default HomeView

