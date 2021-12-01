import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,SafeAreaView } from 'react-native';
import axios from 'axios';

export default function Menu ({menu_id}){
    const [menu,setMenu] = useState({})
    const [loading,setLoading] = useState(false)
    const getMenuItems = () => {
        axios.get(`https://dineryapi.herokuapp.com/menus/${menu_id}/items`)
        .then(function(response){
            setLoading(true)
            setMenu(response.data)
            setLoading(false)
         
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMenuItems()
    })

    if(menu.items === undefined){
        return(
            <View>
                <Text>Loading Menu...</Text>
            </View>
        )
    }

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