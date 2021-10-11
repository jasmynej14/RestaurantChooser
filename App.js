import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AboutScreen from './screens/AboutScreen';
import RestaurantInfo from './screens/RestaurantInfo';
import Restaurants from './screens/Restaurants';
import Icon from 'react-native-vector-icons/Ionicons'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
        
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarIcon:() => (<Icon name="ios-home" size={25}/>),
            headerShown:false
          }}/>
          <Tab.Screen name="Restaurants" component={Restaurants}
          options={{
            tabBarIcon: () => (<Icon name="search" size={25}/>),
            headerShown:false
          }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

