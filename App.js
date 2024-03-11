// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
// import { StyleSheet} from 'react-native';
import Login from "./Pages/Login"
import HomeView from "./Pages/Home/HomeView"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
       <Stack.Navigator 
        screenOptions={{ headerShown: false }}>
       <Stack.Screen 
      name="Login"
       component={Login}
         />
          <Stack.Screen
            name='Home'
            component={HomeView}
            options={{ headerShown: false }}
          />
  </Stack.Navigator>
     
       {/* <KeyboardAvoidingView 
                  style={{flex:1}}
                  behavior="padding">
    <View style={styles.container}>
     <Login />
    </View>
    </KeyboardAvoidingView> */}
    </NavigationContainer>
    </SafeAreaProvider>


// <SafeAreaProvider>
// <NavigationContainer>
//   <Stack.Navigator 
//   screenOptions={{ headerShown: false }}>
//        <Stack.Screen 
//       name="Login"
//        component={Login}
//          />
//           <Stack.Screen
//             name='Home'
//             component={HomeScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name='ConversationsNav'
//             component={ConversationsNavigation}
//             options={{ headerShown: false }}
//           />
    
   
//   </Stack.Navigator>
// </NavigationContainer>
// </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal:20,
//     marginTop:20
//   },
// });
