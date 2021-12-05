import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,SafeAreaView,FlatList } from 'react-native';
import axios from 'axios';
import Menu from './Menu';
export default function MenuList ({rest_id}) {  
    const [menus,setMenus] = useState([])

    const getMenus = () =>{
        axios.get(`https://dineryapi.herokuapp.com/menus?restaurant=${rest_id}`)
        .then(function(response){
            setMenus(response.data)
        })
        .catch(err => console.log(err))
    }
    const renderMenu = ({menu}) => {
        return(
            <View style={styles.menu}>
               <Text style={{fontSize:20,fontWeight:"600"}}>{menu.item.name}</Text>
               <Menu menu_id={menu.item._id}/>
            </View>
        )
    }

    useEffect(() => {
        if(rest_id){
            getMenus()
        } 
        
    })
    return(
        <View>
            {
                menus.map((menu) => {
                    return(
                        <View style={styles.menu}>
                           <Text style={{fontSize:20,fontWeight:"600"}}>{menu.name}</Text>
                           <Menu menu_id={menu._id}/>
                        </View>
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