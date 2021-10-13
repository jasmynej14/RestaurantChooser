import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList,TextInput,Button,TouchableOpacity,SafeAreaView } from 'react-native';
import axios from 'axios';
import Restaurant from '../components/Restaurant';
import restaurantStyles from '../styles/restaurantStyles';
import allRestaurants from '../data/restaurants';
import RestaurantInfo from './RestaurantInfo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SearchStack = createNativeStackNavigator();
export default function SearchScreen({navigation}){
    const [restaurants,setRestaurants] = useState([])
    const [cuisine,setCuisine] = useState("")

    const getRestaurants = () => {
        axios.get("https://dineryapi.herokuapp.com/restaurants")
        .then(response =>setRestaurants(response.data))
        .catch(err => console.log(err))
    }
    const renderRestaurant = (restaurant) => {
       
        return (
            <TouchableOpacity onPress={() => 
            navigation.navigate('Info',{restaurantID:restaurant.item._id})}>
                <Restaurant restaurant={restaurant.item}/>
            </TouchableOpacity>
        
        )
    }
    const getCuisine = (event) => {
        setCuisine(event)
    }
    const search = () => {
        axios.get(`https://dineryapi.herokuapp.com/restaurants?cuisine=${cuisine}`)
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getRestaurants()
    })
    if(restaurants.length === 0){
        return(
            <View style={restaurantStyles.container}>
                <Text>Loading Restaurants...</Text>
            </View>
        )
    }
    return(
        <SafeAreaView style={restaurantStyles.container}>
           <FlatList data={restaurants} renderItem={renderRestaurant} keyExtractor={(item) => item._id}/>
        </SafeAreaView>  
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchArea:{
        flexDirection:"row"
    },
    searchBar:{
        borderColor:"black",
        borderWidth:1,
        width:200,
        margin:5,
       
    },
    searchButton:{
        backgroundColor:"#64B5F6",
        margin:5
    }
  });
  