import React, {useState,useEffect,useContext, Profiler} from 'react';
import { TouchableOpacity, Text, View,Image,StyleSheet,TextInput,SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
export default function ProfileScreen(){
    const [profile,setProfile] = useState({})
    const [showEdit,setShowEdit] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {user,setUser} = useContext(UserContext)

    const getProfile = async () => {
        try{
            const value = await AsyncStorage.getItem('@profile')
            //console.log(JSON.parse(value))
            if(value !== null){
               setProfile(JSON.parse(value))
               //setUser(JSON.parse(value))
            }
            
        }
        catch(e){
            console.log(e)
        }

    }

    const logOut = async () => {
        try {
            await AsyncStorage.removeItem('@profile')
            setProfile({})
            console.log("logged out")
        }
        catch(e){
            console.log(e)
        }
    }

    const logIn = async () => {
        try{
            axios.post(`https://dineryapi.herokuapp.com/users/login`,{email:email,password:password})
            .then(function(response){
                if(response.data.loggedIn){
                    AsyncStorage.setItem('@profile',JSON.stringify(response.data.user))
                    setProfile(JSON.stringify(response.data.user))
                   //setUser(response.data.user)
                    console.log(JSON.stringify(response.data.user))
                }
            })
            .catch(err => console.log(err))
        }
        catch(e){
            console.log(e)
        }
    }
   useEffect(() => {
       getProfile()
   },[profile])
   if(JSON.stringify(profile) === '{}'){
       return(
           <SafeAreaView style={styles.container}>
               <View>
                    <Text style={{fontSize:30,textAlign:"center"}}>Log In</Text>
                    <View style={{margin:10}}>
                        <Text>Email:</Text>
                        <TextInput placeholder="email" style={styles.input} onChangeText={(email) => setEmail(email)}/>
                        <Text>Password:</Text>
                        <TextInput placeholder="password" style={styles.input} onChangeText={(password) => setPassword(password)}/>
                        <TouchableOpacity style={styles.editButton} onPress={logIn}>
                            <Text>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.editButton}>
                            <Text>Create Account</Text>
                        </TouchableOpacity>
                    </View>
               </View>
               

           </SafeAreaView>
       )
   }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfo}>
                <Text style={{fontSize:30,fontWeight:"bold"}}>{profile.name}</Text>
                <Text style={{fontSize:25,fontWeight:"300"}}>{profile.city}, {profile.state}</Text>
                <Text>{profile.email}</Text>
            </View>
        
         
          <TouchableOpacity onPress={logOut} style={styles.editButton}><Text>Log out</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:"center"
    },
    userInfo:{
        backgroundColor:"#D0ECE7",
        borderRadius:10,
        margin:10,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    profileText:{
        fontSize:25,
        textAlign:"center"
    },
    profileImage: {
        width:60,
        height:60
    },
    editButton:{
        backgroundColor:"#FEF9E7",
        padding:10,
        alignSelf:"center",
        borderRadius:10,
        margin:10
    },
    selected:{
        backgroundColor:"#F4D03F"
    },
    input:{
        backgroundColor:"#F2F3F4",
        borderColor:"#F4D03F",
        borderWidth:1,
        borderRadius:5,
        padding:10,
        margin:10
    },
    editArea:{
        margin:10
    }
})