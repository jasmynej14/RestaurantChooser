import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native';

export default function Restaurant({restaurant,navigation}){
    return(
        

           <Text>{restaurant.name}</Text>
    
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        margin:10,
       
        padding:50,
        borderWidth:3,
        borderRadius:10
    },
    restaurantBox:{
        padding:10
    },
    name:{
        fontSize:20,
        fontWeight:"bold"
    },
    button:{
        backgroundColor:"#E57373",
        width:"50%",
        alignSelf:"center",
        margin:5,
        padding:10,
        textAlign:"center"
    },
    icon:{
        width:20,
        height:20
    },
    secondary:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"50%"
    }
})