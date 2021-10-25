import React, {useEffect,useState,useContext} from 'react';
import { TouchableOpacity, Text, View,Image,ScrollView,SafeAreaView } from 'react-native';

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
    let [profile,setProfile] = useState({})
    

    const getProfile = async () => {
        try{
            const user_profile = await AsyncStorage.getItem('@profile')
            if(user_profile !== null){
                setProfile(JSON.parse(user_profile))
            }
            
        }
        catch(e){
            console.log(e)
        }
    }

    const getRecomendations = () => {
        axios.get("https://dineryapi.herokuapp.com/restaurants")
        .then(response => setRecos(response.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getProfile()
        getRecomendations()
    },[user])
   
    return(
        <SafeAreaView style={homeStyles.container}>
           <View style={homeStyles.header}>
               <Text style={{fontFamily:'Quicksand_400Regular',fontSize:60,textAlign:"center"}}>Dinery</Text>
           </View>
           <Text style={{fontSize:20,margin:10}}>Recommendations for {user.name}</Text>
           <ScrollView style={homeStyles.recs} horizontal={true}>
               {
                   recos.map((rec) => {
                       return(
                        <TouchableOpacity style={homeStyles.rec} key={rec._id}>
                            <Text style={{fontSize:20,textAlign:"center",fontWeight:"bold"}}>{rec.name}</Text>
                        </TouchableOpacity>
                       )
                   })
               }
               
              
           </ScrollView>
           <Text style={{fontSize:20,margin:10}}>Recent Orders</Text>
           <ScrollView style={homeStyles.recents}>
               <Text style={{fontSize:20,margin:10}}>No Recent Orders!</Text>
           </ScrollView>
        </SafeAreaView>
    )
}

  