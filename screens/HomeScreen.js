import React, {useEffect,useState,useContext} from 'react';
import { TouchableOpacity, Text, View,Image,ScrollView } from 'react-native';

import { useFonts } from 'expo-font';
import { Quicksand_400Regular} from '@expo-google-fonts/dev';
import homeStyles from '../styles/home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from '../contexts/UserContext';
export default function HomeScreen({ navigation }){
    let [fontsLoaded] = useFonts({Quicksand_400Regular})
    const {user,setUser} = useContext(UserContext)
    
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

    useEffect(() => {
        getProfile()
    })
   
    return(
        <View style={homeStyles.container}>
           <View style={homeStyles.header}>
               <Text style={{fontFamily:'Quicksand_400Regular',fontSize:50,textAlign:"center"}}>Dinery</Text>
           </View>
           <Text style={{fontSize:20,margin:10}}>Recommendations for {profile.name}</Text>
           <ScrollView style={homeStyles.recs} horizontal={true}>
               
               <TouchableOpacity style={homeStyles.rec}>
                   <Text>Recommendation</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.rec}>
                   <Text>Recommendation</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.rec}> 
                   <Text>Recommendation</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.rec}> 
                   <Text>Recommendation</Text>
               </TouchableOpacity>
           </ScrollView>
           <Text style={{fontSize:20,margin:10}}>Recent Orders</Text>
           <ScrollView style={homeStyles.recents}>
               <TouchableOpacity style={homeStyles.order}>
                   <Text>Order</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.order}>
                   <Text>Order</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.order}>
                   <Text>Order</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.order}>
                   <Text>Order</Text>
               </TouchableOpacity>
           </ScrollView>
        </View>
    )
}

  