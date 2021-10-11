import React from 'react'
import { StyleSheet, Text, View,FlatList,TextInput,Button,TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './SearchScreen';
import RestaurantInfo from './RestaurantInfo';
const RestaurantStack = createNativeStackNavigator()
export default function Restaurants(){

    return(
        <RestaurantStack.Navigator>
            <RestaurantStack.Screen name="Search" component={SearchScreen}
            options={{
                headerShown:false
            }}/>
            <RestaurantStack.Screen name="Info" component={RestaurantInfo}
            options={{
                headerShown:false
            }}/>
        </RestaurantStack.Navigator>
    )
}