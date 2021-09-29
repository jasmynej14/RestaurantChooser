import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native';

export default function Restaurant({restaurant}){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <View style={styles.secondary}>
                <Text>{restaurant.type}</Text>
                <Image style={styles.icon} source={require('../assets/004-table.png')}/>
            </View>
            
            <Button title="View More"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#EEEEEE",
        margin:10,
        minWidth:"80%",
        padding:5
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
        width:"25%"
    }
})