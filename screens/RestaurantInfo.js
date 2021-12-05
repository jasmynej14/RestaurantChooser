import React, {useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,SafeAreaView } from 'react-native';
import TypeImage from '../components/TypeImage';
import MenuList from '../components/MenuList';
import Rating from '../components/Rating'
import Reviews from '../components/Review';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from '../contexts/UserContext';
export default function RestaurantInfo({route,navigation}){
    const {restaurantID} = route.params
    const [restaurant,setRestaurant] = useState({})
    const [profile,setProfile] = useState({})
    const {user,setUser} = useContext(UserContext)
   
    const getRestaurant = () => {
        axios.get(`https://dineryapi.herokuapp.com/restaurants/${restaurantID}`)
        .then(response => setRestaurant(response.data))
        .catch(err => console.log(err))
    }
    const favorite = () => {
        axios.post(`https://dineryapi.herokuapp.com/users/${user._id}/favorite`,{restaurant:restaurantID})
        .then(response => console.log(response.data))
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
                <TypeImage type={restaurant.type[0]}/>
                <Rating rating={restaurant.rating}/>
                <Text style={styles.address}>{restaurant.location.address}</Text>
                <Text style={styles.address}>{restaurant.location.city},{restaurant.location.state}</Text>
            </View>
            <TouchableOpacity style={styles.compareButton} onPress={() => navigation.navigate('Compare',{res1Id:restaurant._id})}>
                <Text>Compare!</Text>
            </TouchableOpacity>
            <View style={{margin:10}}>
                <Text style={{fontSize:20}}>Menus</Text>
                <MenuList rest_id={restaurantID}/>
            </View>
            <View style={{margin:10}}>
                <Text style={{fontSize:20}}>Reviews</Text>
                <TouchableOpacity style={styles.reviewButton}>
                    <Text style={{textAlign:"center"}}>Write a Review</Text>
                </TouchableOpacity>
                <Reviews rest_id={restaurantID}/>

            </View>
            <View>
                <TouchableOpacity style={styles.compareButton} onPress={favorite}><Text>Favorite</Text></TouchableOpacity>
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
       
        textAlign:"center"
    },
    infoBox:{
       backgroundColor:"#F7DC6F",
       borderRadius:10,
       padding:10,
       margin:10,
       textAlign:"center",
       alignItems:"center" 
    },
    address:{
        
        fontSize:20
    },
    compareButton:{
        backgroundColor:"#F8C471",
        padding:10,
        alignSelf:"center",
        borderRadius:5
    },
    reviewButton:{
        backgroundColor:"#F8C471",
        padding:10,
        borderRadius:5,
        width:"40%",
        margin:10
        
    }
})
