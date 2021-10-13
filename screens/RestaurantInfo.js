import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,SafeAreaView } from 'react-native';
import TypeImage from '../components/TypeImage';
import axios from 'axios';
export default function RestaurantInfo({route}){
    const {restaurantID} = route.params
    const [restaurant,setRestaurant] = useState({})
    
    const getRestaurant = () => {
        axios.get(`https://dineryapi.herokuapp.com/restaurants/${restaurantID}`)
        .then(response => setRestaurant(response.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getRestaurant()
    })
    
    if(JSON.stringify(restaurant) === "{}"){
        return(
            <SafeAreaView>
                <Text>Loading...</Text>
            </SafeAreaView>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.name}>{restaurant.name}</Text>
            </View>
            <View style={styles.infoBox}>
                <Text>{restaurant.location.address}</Text>
                <Text>{restaurant.location.city},{restaurant.location.state}</Text>
                <Text>{restaurant.cuisine}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#ffff",
    },
    name:{
        fontSize:40,
        fontWeight:"bold",
        textAlign:"center"
    },
    infoBox:{
       backgroundColor:"#F7DC6F",
       borderRadius:10,
       padding:10,
       margin:10 
    }
})
