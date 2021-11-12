import React, {useState,useEffect,useContext} from 'react';
import { TouchableOpacity, Text, View,Image,StyleSheet,TextInput,SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from '../contexts/UserContext';
import axios from 'axios';

export default function CreateAccount({navigation}){
    const {user,setUser} = useContext(UserContext)
    const [favOption,setFavOption] = useState("")
    const [userProfile,setUserProfile] = useState({
        name:"",
        email:"",
        city:"",
        state:"",
        password:"",
        prefDining:""
    })
    
    const createAccount = () => {
        setUserProfile({...userProfile,prefDining:favOption})
        axios.post("https://dineryapi.herokuapp.com/users",userProfile)
        .then(function(response){
            setUser(response.data)
            //AsyncStorage.setItem('@profile',JSON.stringify(response.data))
            navigation.navigate("UserProfile")

        })
        .catch(err => console.log(err))
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{fontSize:30,textAlign:"center"}}>Create Account</Text>
                <View style={{margin:10}}>
                    <Text>Name</Text>
                    <TextInput style={styles.input} placeholder="Name" onChangeText={(val) => setUserProfile({...userProfile,name:val})}/>
                    <Text>Email</Text>
                    <TextInput style={styles.input} placeholder="Email" onChangeText={(val) => setUserProfile({...userProfile,email:val})} />
                    <Text>City</Text>
                    <TextInput style={styles.input} placeholder="City" onChangeText={(val) => setUserProfile({...userProfile,city:val})}/>
                    <Text>State</Text>
                    <TextInput style={styles.input} placeholder="State" onChangeText={(val) => setUserProfile({...userProfile,state:val})}/>
                    <Text>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" onChangeText={(val) => setUserProfile({...userProfile,password:val})}/>
                    <Text style={{textAlign:"center"}}>Preferred Dining Option</Text>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <TouchableOpacity style={[styles.button,userProfile["prefDining"] === "dine-in" && styles.selected]} onPress={() => setUserProfile({...userProfile,prefDining:"dine-in"})}>
                                <Text>Dine In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button,userProfile["prefDining"] === "take-out" && styles.selected]} onPress={() => setUserProfile({...userProfile,prefDining:"take-out"})}>
                                <Text>Take Out</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={createAccount}>
                        <Text>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center"
    },
    input:{
        backgroundColor:"#F2F3F4",
        borderColor:"#F4D03F",
        borderWidth:1,
        borderRadius:5,
        padding:10,
        margin:10
    },
    button:{
        backgroundColor:"#FEF9E7",
        padding:10,
        alignSelf:"center",
        borderRadius:10,
        margin:10
    },
    selected:{
        backgroundColor:"#FFE998"
    }
})