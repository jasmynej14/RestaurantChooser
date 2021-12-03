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
    let [fontsLoaded] = useFonts({Quicksand_400Regular})
    const {user,setUser} = useContext(UserContext)
    const [recos,setRecos] = useState([])
    const [favs,setFavs] = useState([])
    const [profile,setProfile] = useState({})
    

    const getProfile = async () => {
        try{
            const user_profile = await AsyncStorage.getItem('@profile')
            if(user_profile !== null){
                setProfile(JSON.parse(user_profile))
                
                //setFavs(user_profile.favorites)
            }
            
        }
        catch(e){
            console.log(e)
        }
    }

    const getFavorites = () => {
        axios.get(`https://dineryapi.herokuapp.com/users/${profile._id}`)
                .then(function(response){
                    
                    setFavs(response.data.favorites)
        }).catch(err => console.log(err))
    }
   const renderFavorite = (restaurant) => { 
       console.log(restaurant)
       return(
        <TouchableOpacity>
            <Restaurant restaurant={restaurant.item}/>
        </TouchableOpacity>
       )
   }

    useEffect(() => {
        getProfile()
        getFavorites()
    },[user])
    if(JSON.stringify(user) === "{}"){
        return (
            <SafeAreaView style={homeStyles.container}>
                <View style={homeStyles.header}>
                    <Text style={{fontSize:60,textAlign:"center"}}>Dinery</Text>
                </View>
                
                
                <TouchableOpacity style={homeStyles.logIn} onPress={() => navigation.navigate('Profile')}>
                    <Text>Log In/Sign Up for the Full Experience</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
    return(
        <SafeAreaView style={homeStyles.container}>
           <View style={homeStyles.header}>
               <Text style={{fontSize:60,textAlign:"center"}}>Dinery</Text>
           </View>
           <View style={homeStyles.favorites}>
               <Text style={{fontSize:30,textAlign:"center"}}>{profile.name}'s Favorite Restaurants</Text>
               
                <FlatList data={favs} renderItem={renderFavorite} keyExtractor={(item) => item._id}/>
           </View>
          
           
        </SafeAreaView>
    )
}

  