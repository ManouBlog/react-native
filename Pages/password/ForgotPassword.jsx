import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, TextInput,TouchableOpacity, Image, ScrollView, View,
     Alert,ActivityIndicator,KeyboardAvoidingView} from 'react-native';
     import Input from "../../compoments/Input"

function ForgotPassword() {
    const [data,setData]=useState({
        email:"",
    })
  return (
    <SafeAreaView style={{
        flex:1,
    }}>
        <KeyboardAvoidingView
style={{flex:1}} 
 behavior="padding">
      <View style={{
        flex:1,
        justifyContent:"center",
        paddingHorizontal:25,
      }}>
        <Text style={{
            fontSize:30,
            fontWeight:"700",
            alignSelf:"center"
        }}>Forgot Password</Text>

    <View>
    <Input
    label="Email"
    valueInput={data.email}
    handleText={(value)=>{
        setData({...data,email:value})
        }
    }
    />
    {/* <Text>
        Email
    </Text>
    <TextInput
    style={{
        fontSize: 14,
        paddingVertical: 14,
        paddingLeft: 20,
        backgroundColor: "#ffffff",
        shadowColor: "black",
        borderWidth: 1,
        shadowRadius: 9,
        elevation: 3,
    }}
    onChangeText={
        (value)=>{
          setData({...data,email:value})
        }
      }
    value={data.email}
    /> */}
    <TouchableOpacity
    style={{
        backgroundColor:"black",
        flexDirection: 'row',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 20,
    }}
    onPress={()=>{
        console.log("send",data)
    }}
    >
        <Text style={{
            color:"white",
            fontWeight:"bold"
        }}>Envoyer</Text>
    </TouchableOpacity>

    </View>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}


export default ForgotPassword
