import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList,TextInput,Button,TouchableOpacity,SafeAreaView,ScrollView } from 'react-native';
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
    const categories = ['Italian','French','Pizza','Sandwiches','American']
    const getRestaurants = () => {
        if(cuisine === ""){
            axios.get("https://dineryapi.herokuapp.com/restaurants")
            .then(response =>setRestaurants(response.data))
            .catch(err => console.log(err))
        }
        else{
            axios.get(`https://dineryapi.herokuapp.com/restaurants?cuisine=${cuisine}`)
            .then(response => setRestaurants(response.data))
            .catch(err => console.log(err))
        }
       
    }
    const renderRestaurant = (restaurant) => { 
        return (
            <TouchableOpacity onPress={() => 
            navigation.navigate('Info',{restaurantID:restaurant.item._id})}>
                <Restaurant restaurant={restaurant.item}/>
            </TouchableOpacity>     
        )
    }

    const filterRestaurants = () => {

    }
    const setFilter = (category) => {
        if(cuisine === category){
            setCuisine("")
        }
        else{
            setCuisine(category)
        }
    }
    useEffect(() => {
        getRestaurants()
    })



    if(restaurants.length === 0){
        return(
            <SafeAreaView style={restaurantStyles.container}>
                <Text>Loading Restaurants...</Text>
            </SafeAreaView>
        )
    }
    return(
        <SafeAreaView style={restaurantStyles.container}>
            <ScrollView style={styles.searchArea} horizontal={true}>
               {categories.map((category) => 
                   <TouchableOpacity style={[styles.filterButton,category===cuisine &&styles.selectedFilter]} key={category} onPress={() => setFilter(category)}>
                   <Text style={styles.categoryText}>{category}</Text>
                   </TouchableOpacity>
               )}
            </ScrollView>

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
        flexDirection:"row",
        backgroundColor:"#F5CBA7",
        padding:20,
        borderRadius:10,
        margin:10,
        maxHeight:100
      
    },
    filterButton:{
        backgroundColor:"#FEF9E7",
        borderRadius:5,
        padding:5,
        marginRight:10,
        minWidth:100,
        justifyContent:"center",
        
    },
    categoryText:{
        textAlign:"center",
        fontSize:20
    },
    selectedFilter:{
        backgroundColor:"#F7DC6F"
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
  