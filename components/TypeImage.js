import React from 'react';
import { StyleSheet,Image } from 'react-native';

export default function TypeImage({type}){

    if(type === "dine-in"){
        return(
            <Image source={require('../assets/icons8-tableware-50.png')} style={{width:40,height:40}}/>
        )
    }
    else if(type === "take-out"){
        return(
            <Image source={require('../assets/icons8-restaurant-50.png')} style={{width:40,height:40}}/>
        )
    }
    else{
        return(
            <Image source={require('../assets/icons8-deliver-food-50.png')} style={{width:40,height:40}}/>
        )
    }
}