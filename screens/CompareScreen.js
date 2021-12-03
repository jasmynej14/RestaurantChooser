import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,SafeAreaView } from 'react-native';
import Rating from '../components/Rating'
import axios from 'axios';
export default function CompareScreen(){
    const [res1,setRes1] = useState({})
    const [res2,setRes2] = useState({})
    return(
        <SafeAreaView>
            <View>
                <Text>Restaurant 1</Text>
            </View>
            <View>
                <Text>Restaurant 2</Text>
            </View>
        </SafeAreaView>
    )
}