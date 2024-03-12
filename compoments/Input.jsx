import React from "react";
import { Text, TextInput,View,
     } from 'react-native';

function Input({label,valueInput,handleText}) {
  return (
    <View>
    <Text style={{
        fontWeight:"700",
        marginVertical:10
    }}>
    {label}
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
    handleText
    // (value)=>{
    //   setData({...data,nom:value})
    // }
  }
value={valueInput}
/>
    </View>
  )
}

export default Input
