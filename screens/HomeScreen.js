import React from 'react';
import { TouchableOpacity, Text, View,Image } from 'react-native';
import homeStyles from '../styles/home';
export default function HomeScreen({ navigation }){
    return(
        <View style={homeStyles.container}>
            <Image source={require('../assets/002-restaurant.png')} style={homeStyles.image}/>
            <Text style={homeStyles.title}>Restaurant Chooser</Text>
            
            <View style={homeStyles.navBox}>
                <TouchableOpacity style={homeStyles.navItem} onPress={() => navigation.navigate('Search')}>
                    <View>
                        <Text style={homeStyles.navText}>View Restaurants</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyles.navItem} onPress={() => navigation.navigate('About')}>
                    <View >
                        <Text style={homeStyles.navText}>About</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

  