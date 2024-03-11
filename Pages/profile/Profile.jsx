import React from 'react'
import {
  View,

  Text,
  TouchableOpacity,
} from "react-native";

function Profile({navigation}) {
    return (
        <View>
          <Text>Your account</Text>

          <View style={{
            padding:10,
          }}>
             <TouchableOpacity
    onPress={()=>{
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }}>
                            
    <Text style={{
        color: "red",
        fontSize: 18,
        fontWeight: '600',
        alignItems: "center",
    }}>Logout</Text>
                      
                  
                </TouchableOpacity>
          </View>
        </View>
      )
}

export default Profile
