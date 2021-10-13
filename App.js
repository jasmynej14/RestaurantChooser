import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AboutScreen from './screens/AboutScreen';
import RestaurantInfo from './screens/RestaurantInfo';
import ProfileScreen from './screens/ProfileScreen';
import Restaurants from './screens/Restaurants';
import Icon from 'react-native-vector-icons/AntDesign'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
        
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarIcon:(focused) => (<Icon name="home" size={25} color={focused? "red" : "black"}/>),
            headerShown:false
          }}/>
          <Tab.Screen name="Restaurants" component={Restaurants}
          options={{
            tabBarIcon: (focused) => (<Icon name="search1" size={25} color={focused? "gray" : "black"}/>),
            headerShown:false
          }}
          />
          <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
              tabBarIcon: (focused) => (<Icon name="user" size={25} color={focused? "gray" : "black"}/>)
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

