import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  View,
  TextInput,
  RefreshControl,
  ScrollView,
  Text,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


function Login({navigation}) {
    const statusBarHeight = StatusBar.currentHeight
    const [loading,setLoading]=useState(false);
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [msg,setMsg]=useState({
        email:"",
        password:"",
    });
    const [refreshing, setRefreshing] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const handleSignin=()=>{
        if(!email){
            setMsg({...msg,email:"Veuillez remplir l'email"})
        }
        if(!password){
            setMsg({...msg,password:"Veuillez remplir le mot de passe"})
        }
        if(email && password){
          setLoading(true);
          Alert.alert("Success", "Login Success!")
          setLoading(false);
          navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
          });
        }else{
          Alert.alert("Error", "Veuillez remplir tous les champs") 
        }
        
    }
    const handleRefresh = () => {
        setRefreshing(true);
        setPassword("")
        setEmail("")
        setMsg("")
        setLoading(false);
        setRefreshing(false);
    };
  return (
    <KeyboardAvoidingView 
    style={{flex:1,
    alignItems:"center",
    marginTop: statusBarHeight,
    marginHorizontal:10,
    
    }}
    behavior="padding">
    <SafeAreaView style={{flex:1}}>
        
    <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
            >
     
    <View >
     
        <Text
        style={{
            fontWeight:"700",
            fontSize:30
        }}
        >Sign In</Text>
      
      <View style={{
        marginVertical:20
      }}>
        <Text style={{
            letterSpacing:2
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          expedita cupiditate voluptatem saepe assumenda? Quibusdam pariatur
          beatae, tenetur, eligendi exercitationem quaerat tempora aliquam
          voluptatibus dolor cum esse itaque, sed similique!
        </Text>
      </View>
      
      <View style={{
        marginVertical:20
      }} >
      <Text 
        style={{
            fontWeight:"700",
        }}
        >Email</Text>
        <TextInput
         style={{
            fontSize: 14,
            paddingVertical: 12,
            paddingLeft: 20,
            backgroundColor: "#ffffff",
            shadowColor: "black",
            borderWidth: 1,
            shadowRadius: 9,
            elevation: 3,
          }}
          keyboardType="email-address"
          placeholder='test@gmail.com'
          value={email}
          onChangeText={
            (value)=>{
              console.log(value)
              setEmail(value)
            }
          }
        />
      </View>
      {
        !email && 
        <Text>{msg.email}</Text>
      }

      <View >
        <Text 
        style={{
            fontWeight:"700",
        }}
        >Password</Text>
        <View>
        <TextInput
         secureTextEntry={showPassword}
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
          placeholder='test1234'
          value={password}
          onChangeText={
            (value)=>{
              console.log(value)
              setPassword(value)
            }
          }
        />
        <Ionicons
          name={showPassword ? 'eye-off-outline':'eye-outline'}
          size={24}
          color='#000000'
          style={{ position: "absolute", right: 28, top: 6 }}
          onPress={()=>{
            setShowPassword(value=>!value)
          }}
        />
        </View>
        
      </View>
      {
        !password && <View>
        <Text>{msg.password}</Text>
      </View>
      }
      <View>
      <TouchableOpacity style={ {
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
    onPress={handleSignin}>
                    {loading ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (            
                            <Text style={{
        color: "white",
        fontSize: 18,
        fontWeight: '600',
        alignItems: "center",
    }}>Sign in</Text>
                      
                    )}
                </TouchableOpacity>
      </View>
    </View>
  
    </ScrollView>
   

    </SafeAreaView>
    </KeyboardAvoidingView>
  
  );
}

export default Login;
