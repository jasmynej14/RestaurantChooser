import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import homeStyles from '../styles/home';
export default function HomeScreen(){
    return(
        <View style={homeStyles.container}>
            <Text style={homeStyles.title}>Restaurant Chooser</Text>
            <View style={homeStyles.navBox}>
                <TouchableOpacity style={homeStyles.navItem}>
                    <View>
                        <Text style={homeStyles.navText}>View Restaurants</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyles.navItem}>
                    <View >
                        <Text style={homeStyles.navText}>Get Random Restaurant</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyles.navItem}>
                    <View >
                        <Text style={homeStyles.navText}>About</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

  