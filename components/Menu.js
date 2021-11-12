import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,SafeAreaView } from 'react-native';
import axios from 'axios';

export default function Menu ({menu_id}){
    const [menu,setMenu] = useState({})

    const getMenuItems = () => {
        axios.get(`https://dineryapi.herokuapp.com/menus/${menu_id}/items`)
        .then(function(response){
            setMenu(response.data)
         
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMenuItems()
    })
    return (
        <View>
            {
                menu.items.map((item) => {
                    return(
                        <Text>{item.name} ({item.price})</Text>
                    )
                    
                })
            }
        </View>
    )
}