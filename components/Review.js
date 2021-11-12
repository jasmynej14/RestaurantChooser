import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import Rating from './Rating';
export default function Reviews({rest_id}){
    const[reviews,setReviews] = useState([])

    const getReviews = () => {
        axios.get(`https://dineryapi.herokuapp.com/reviews?restaurant=${rest_id}`)
        .then(function (response) {
            setReviews(response.data)
        })
        .catch(err => console.log(err))
    }
    const renderReview = (review) => {
        return(
            <View style={styles.review}>
                <Text style={{fontSize:25,fontWeight:"bold"}}>{review.item.reviewer} says...</Text>
                <Rating rating={4}/>
                <Text style={{fontSize:20,fontWeight:"300"}}>{review.item.reviewContent}</Text>
            </View>
            

        )
    }
    useEffect(() => {
        getReviews()
    })

    return (
        <View>
            <FlatList data={reviews} renderItem={renderReview} keyExtractor={(item) => item._id}/>
        </View>
    )
}

const styles = StyleSheet.create({
    review: {
        margin:10,
        padding:10,
        backgroundColor:"#E5E8E8",
        borderRadius:10
    }
})