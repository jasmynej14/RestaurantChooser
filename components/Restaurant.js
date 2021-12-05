import React from 'react';
import Rating from './Rating';
import TypeImage from './TypeImage';
import { StyleSheet, Text, View} from 'react-native';

export default function Restaurant({restaurant,navigation}){
    let types = ""
    let cuisines = ""
    const renderType = () =>{
        if(restaurant.type !== undefined){
            restaurant.type.map((type) => {
                if(type==="dine-in"){
                    types+= "Dine-In "
                }
                else if(type==="take-out"){
                    types+="Take Out "
                }
                else{
                    type+= "Delivery "
                }
            })
        }
        
    }

    const renderCuisines = () => {
        if(restaurant.cuisine !== undefined){
            restaurant.cuisine.map((cui) => {
                cuisines+=cui
                cuisines+=" "
            })
        }
        
    }
    renderType()
    renderCuisines()
    if(restaurant.type !== undefined || restaurant.cuisine !== undefined){
        return(
        
            <View style={styles.restaurantBox}>
                <View>
                    <TypeImage type={restaurant.type[0]}/>
                </View>
                <View>
                    <Text style={styles.name}>{restaurant.name}</Text>
                    <Rating  rating={restaurant.rating}/>
                    <Text>{types}</Text>
                    <Text>{cuisines}</Text>
                </View>
                
            </View>
           
    
    )
    }
    else{
        return(
            <View style={styles.restaurantBox}>
                <Text>Restaurant not loaded!</Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        padding:50,
        borderWidth:3,
        borderRadius:10
    },
    restaurantBox:{
        padding:10,
        backgroundColor:"#F7F8EB",
        margin:10,
        flexDirection:"row",
        borderRadius:10
    },
    name:{
        fontSize:20,
        fontWeight:"bold"
    },
    button:{
        backgroundColor:"#E57373",
        width:"50%",
        alignSelf:"center",
        margin:5,
        padding:10,
        textAlign:"center"
    },
    icon:{
        width:40,
        height:40
    },
    secondary:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"50%"
    }
})