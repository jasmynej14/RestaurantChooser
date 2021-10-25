import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,SafeAreaView } from 'react-native';
import axios from 'axios';

export default function Menu ({rest_id}) {  
    const [menus,setMenus] = useState([])

    const getMenus = () =>{
        axios.get(`https://dineryapi.herokuapp.com/menus?restaurant=${rest_id}`)
        .then(function(response){
            setMenus(response.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMenus()
    })
    return(
        <View>
            {
                menus.map((menu) => {
                    return(
                        <TouchableOpacity style={styles.menu}>
                           <Text>{menu.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    menu:{
        backgroundColor:"#EAFAF1",
        padding:10,
        margin:10
    }
})