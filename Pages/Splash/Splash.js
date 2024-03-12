import React from "react";
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import styles from "./style";

function Splash({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/logo.jpeg")}
    >
      <View style={styles.container}>
        {/* <Image style={styles.logo}source={require('../../../assets/logo.png')}/> */}
        <Text style={styles.title}>IndexData</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 50,
            paddingVertical: 15,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{
            color:'white',
            fontWeight:"700"
          }}>Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default React.memo(Splash);
