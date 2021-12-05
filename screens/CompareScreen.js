import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,SafeAreaView,ScrollView } from 'react-native';
import Restaurant from '../components/Restaurant';
import axios from 'axios';
export default function CompareScreen({route}){
    const [res1,setRes1] = useState({})
    const [res2,setRes2] = useState({})
    const [score1,setScore1] = useState(Math.round(Math.random() *100))
    const [score2,setScore2] = useState(0)
    const [chosenRes,setChosenRes] = useState("")
    const [restaurants,setRestaurants] = useState([])
    const [loading,setLoading] = useState(false)
    const {res1Id} = route.params
    const getRes1 =() => {
        axios.get(`https://dineryapi.herokuapp.com/restaurants/${res1Id}`)
        .then(function(response){
            setRes1(response.data)
            
        })
        .catch(err => console.log(err))
    }
    const getAllRestauarnts = () => {
        axios.get("https://dineryapi.herokuapp.com/restaurants")
            .then(response =>setRestaurants(response.data))
            .catch(err => console.log(err))
    }
    const getRes2 = () => {
        axios.get(`https://dineryapi.herokuapp.com/restaurants/${chosenRes}`)
        .then(function(response){
            setRes2(response.data)
            setScore2(Math.round(Math.random() *100))
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        setLoading(true)
        getAllRestauarnts()
        getRes1()
        setLoading(false)
    })

    useEffect(() => {
        getRes2()
    },[chosenRes])

    if(loading) {
        return(
            <SafeAreaView style={styles.container}>
                <Text>Loading....</Text>
            </SafeAreaView>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.restaurant}>
                {
                    JSON.stringify(res1) !== "{}" &&
                    <Restaurant restaurant={res1}/>
                    
                }
                <Text style={{fontSize:30,fontWeight:"bold"}}>{score1}% Match for You!</Text>
                
            </View>
            <View style={styles.restaurant}>
                <Text>Choose a Restaurant to Compare</Text>
                <ScrollView horizontal={true}>
                    {
                        restaurants.map((rest)=>
                            <TouchableOpacity style={styles.choice} onPress={() => setChosenRes(rest._id)} key={rest._id}>
                                <Text>{rest.name}</Text>
                            </TouchableOpacity>
                        )
                    }
                </ScrollView>
                {JSON.stringify(res2) !== "{}" &&
                    <View>
                        <Restaurant restaurant={res2}/>
                        <Text style={{fontSize:30,fontWeight:"bold"}}>{score2}% Match for You!</Text>
                    </View>
                }
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    restaurant:{
        flex:2
    },
    choice:{
        backgroundColor:"#F4D03F",
        margin:10,
        padding:10
    }
})