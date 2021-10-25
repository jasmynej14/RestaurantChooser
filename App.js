import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Restaurants from './screens/Restaurants';
import Icon from 'react-native-vector-icons/AntDesign'
import UserContext from './contexts/UserContext';
import { TouchableOpacity, Text, View,Image } from 'react-native';
const Tab = createBottomTabNavigator();
export default function App({ route }) {
  const [user,setUser] = useState({})
  return (
    <UserContext.Provider value={{user,setUser}} >
      <NavigationContainer>
       
       <Tab.Navigator screenOptions={{
         tabBarActiveTintColor:"red",
         tabBarInactiveTintColor:"gray"
       }}>
         
         <Tab.Screen name="Home" component={HomeScreen}
         options={{
           tabBarIcon:({focused}) => (<Icon name="home" size={25} color={focused? "red" : "gray"}/>),
           headerShown:false
         }}/>
         <Tab.Screen name="Restaurants" component={Restaurants}
         options={{
           tabBarIcon: ({focused}) => (<Icon name="search1" size={25} color={focused? "red" : "gray"}/>),
           headerShown:false
         }}
         />
         <Tab.Screen name="Profile" component={ProfileScreen}
           options={{
             tabBarIcon: ({focused}) => (<Icon name="user" size={25} color={focused? "red" : "gray"}/>),
             headerShown:false
           }}
         />
       </Tab.Navigator>
   </NavigationContainer>

    </UserContext.Provider>
    
  );
}

