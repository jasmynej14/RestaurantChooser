import React from 'react';
import {View,Text,StyleSheet} from'react-native'

export default function AboutScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.box}>
            <Text style={{fontWeight:"bold",fontSize:25}}>About</Text>
            <Text style={{textAlign:"center",fontSize:20}}>RestaurantChooser (name tbd) allows you 
                to search for restaurants, compare and contrast restaurants,
                and get restaurant suggestions based off of 2 different places.
                Hopefully this app would also allow you to order food or reserve a table
                at your chosen restaurant
            </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:5
    },
    box:{
        backgroundColor:"#CE93D8",
        alignItems:"center",
        padding:10
    }
})