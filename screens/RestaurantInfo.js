import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,SafeAreaView } from 'react-native';
import Restaurant from '../components/Restaurant';

export default function RestaurantInfo({route}){
    const {restaurantID} = route.params
    return(
        <SafeAreaView>
            <Text>id:{restaurantID}</Text>
        </SafeAreaView>
    )
}
