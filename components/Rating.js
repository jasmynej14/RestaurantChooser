import React from 'react';
import {View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons' 
export default function Rating({ rating }){
    
    if(rating === 3){
        return (
            <View style={styles.container}>
    
                <Icon name="star" size={10}/>
                <Icon name="star" size={10}/>
                <Icon name="star" size={10}/>
            </View>
        )
    }
    else if(rating === 4){
        return (
            <View style={styles.container}>
                <Icon name="star" size={10}/>
                <Icon name="star" size={10}/>
                <Icon name="star" size={10}/>
                <Icon name="star" size={10}/>
            </View>
        )
    }
    else if(rating === 2){
        return (
            <View style={styles.container}>
                <Icon name="star" size={10}/>
                <Icon name="star" size={10}/>
            </View>
        )
    }
    else if(rating === 5){
        return (
            <View style={styles.container}>
                <Icon name="star" size={10}/>
                <Icon name="star" size={10}/>
                <Icon name="star" size={10}/>
                <Icon name="star" size={10}/>
                <Icon name="star" size={10}/>
            </View>
        )
    }
    else{
        <View style={styles.container}>
            <Icon name="star" size={10}/>
        </View>
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"row"
    }
})

