// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
// import { View } from 'react-native';
import Login from "./Pages/Login"
import HomeView from "./Pages/Home/HomeView"
import Splash from "./Pages/Splash/Splash"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
     
      <NavigationContainer >
      
       <Stack.Navigator 
        screenOptions={{ headerShown: false }}>
          <Stack.Screen 
      name="Splash"
       component={Splash}
         />
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
   
    </NavigationContainer>
   
    </SafeAreaProvider>
  );
}