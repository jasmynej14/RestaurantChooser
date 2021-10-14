import React, {useState,useEffect} from 'react';
import { TouchableOpacity, Text, View,Image,StyleSheet,TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ProfileScreen(){
    const [profile,setProfile] = useState({name:"",location:""})
    const [showEdit,setShowEdit] = useState(false)
    const [name,setName] = useState("")
    const [location,setLocation] = useState("")

    const editProfile = async () => {
        setShowEdit(false)
        //setProfile({name:name,location:location})
        try{
            const jsonProfile = JSON.stringify({name:name,location:location})
            console.log(jsonProfile)
            await AsyncStorage.setItem('@profile',jsonProfile)
        }
        catch (e){
            console.log(e)
        }
        //save profile data 
    }

    const getProfile = async () => {
        try{
            const value = await AsyncStorage.getItem('@profile')
            //console.log(JSON.parse(value))
            if(value !== null){
               setProfile(JSON.parse(value))
            }
            
        }
        catch(e){
            console.log(e)
        }

    }

   useEffect(() => {
       getProfile()
   })
    return(
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={require('../assets/icons8-Office-Beyonce.png')} style={styles.profileImage}/>
                <Text style={styles.profileText}>{profile.name === ""? "Enter Name":profile.name}</Text>
                <Text style={styles.profileText}>{profile.location === ""?"Enter Location":profile.location}</Text>
                
            </View>
            <TouchableOpacity style={[styles.editButton,showEdit && styles.selected]} onPress={() => setShowEdit(true)}>
                <Text>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.editButton,showEdit && styles.selected]} onPress={getProfile}>
                <Text>Load Profile</Text>
            </TouchableOpacity>
            {showEdit ? 
                <View style={styles.editArea}>
                <Text style={{fontSize:20,fontWeight:300,margin:10}}>Name</Text>
                <TextInput placeholder="name" style={styles.input} onChangeText={(value) => setName(value)}/>
                <Text style={{fontSize:20,fontWeight:300,margin:10}}>Location</Text>
                <TextInput placeholder="location" style={styles.input} onChangeText={(value) => setLocation(value)}/>
                <TouchableOpacity style={styles.editButton} onPress={editProfile}>
                    <Text>Edit</Text>
                </TouchableOpacity>
            </View>
            :
            <View>
                <Text>History</Text>
            </View>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1
    },
    userInfo:{
        backgroundColor:"#D0ECE7",
        borderRadius:10,
        margin:10,
        justifyContent:"center",
        alignItems:"center"
    },
    profileText:{
        fontSize:25,
        fontWeight:300,
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