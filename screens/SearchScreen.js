import React, {useState} from 'react';
import { StyleSheet, Text, View,FlatList,TextInput,Button,TouchableOpacity } from 'react-native';
import Restaurant from '../components/Restaurant';
import allRestaurants from '../data/restaurants';
export default function SearchScreen(){
    const [restaurants,setRestaurants] = useState(allRestaurants)
    const [cuisine,setCuisine] = useState("")
    const renderRestaurant = (restaurant) => {
        return <Restaurant restaurant={restaurant.item}/>
    }
    const getCuisine = (event) => {
        setCuisine(event)
    }
    const search = () => {
        console.log(cuisine)
        if(cuisine === ""){
            setRestaurants(allRestaurants)
        }
        else{
            setRestaurants(allRestaurants.filter(rest => rest.cuisine === cuisine))
        }
    }

    
    return(
        <View style={styles.container}>
            <View style={styles.searchArea}>
                <TextInput style={styles.searchBar} placeholder="Enter Cuisine" onChangeText={getCuisine}/>
                <TouchableOpacity style={styles.searchButton} onPress={search}>
                    <Text style={{textAlign:"center", justifySelf:"center"}}>Search</Text>
                </TouchableOpacity>
            </View>
            
           <FlatList data={restaurants} renderItem={renderRestaurant} keyExtractor={res => res.id}/>
        </View>
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
  