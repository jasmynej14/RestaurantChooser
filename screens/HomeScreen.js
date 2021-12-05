import React, {useEffect,useState,useContext} from 'react';
import { TouchableOpacity, Text, View,Image,ScrollView,SafeAreaView, TextComponent,FlatList } from 'react-native';
import Restaurant from '../components/Restaurant';
import { useFonts } from 'expo-font';
import { Quicksand_400Regular} from '@expo-google-fonts/dev';
import homeStyles from '../styles/home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from '../contexts/UserContext';

import axios from 'axios'
export default function HomeScreen({ navigation }){
    
    const [favs,setFavs] = useState([])
    const getFavorites = () => {
        axios.get(`https://dineryapi.herokuapp.com/users/618c6387e99eafda86bc0621`)
                .then(function(response){
                    
                    setFavs(response.data.favorites)
        }).catch(err => console.log(err))
    }
   const renderFavorite = (restaurant) => { 
       //console.log(restaurant)
       return(
        <TouchableOpacity>
            <Restaurant restaurant={restaurant.item}/>
        </TouchableOpacity>
       )
   }

    useEffect(() => {
        getFavorites()
    })
    
    return(
        <SafeAreaView style={homeStyles.container}>
           <View style={homeStyles.header}>
               <Text style={{fontSize:60,textAlign:"center"}}>Dinery</Text>
           </View>
           <View style={homeStyles.favorites}>
               <Text style={{fontSize:30,textAlign:"center"}}>Bruno's Favorite Restaurants</Text>
               
                <FlatList data={favs} renderItem={renderFavorite} keyExtractor={(item) => item._id}/>
           </View>
          
           
        </SafeAreaView>
    )
}

  