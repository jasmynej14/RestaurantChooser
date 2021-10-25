import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,SafeAreaView } from 'react-native';
import TypeImage from '../components/TypeImage';
import { useFonts } from 'expo-font';
import { Quicksand_400Regular,Quicksand_300Light,Quicksand_600SemiBold} from '@expo-google-fonts/dev';
import axios from 'axios';
export default function RestaurantInfo({route}){
    const {restaurantID} = route.params
    const [restaurant,setRestaurant] = useState({})
    let [fontsLoaded] = useFonts({Quicksand_400Regular,Quicksand_300Light,Quicksand_600SemiBold})
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
                <Text style={styles.address}>{restaurant.location.address}</Text>
                <Text style={styles.address}>{restaurant.location.city},{restaurant.location.state}</Text>
            </View>
            <View>
                <Text>Compare</Text>
            </View>
            <View>
                <Text>Menu</Text>
            </View>
            <View>
                <Text>Reviews</Text>
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
        fontFamily:'Quicksand_600SemiBold',
        textAlign:"center"
    },
    infoBox:{
       backgroundColor:"#F7DC6F",
       borderRadius:10,
       padding:10,
       margin:10,
       textAlign:"center" 
    },
    address:{
        fontFamily:'Quicksand_400Regular',
        fontSize:20
    }
})
