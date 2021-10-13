import React from 'react';
import { TouchableOpacity, Text, View,Image } from 'react-native';
import homeStyles from '../styles/home';
export default function HomeScreen({ navigation }){
    return(
        <View style={homeStyles.container}>
           <View>
               <Text>App Header</Text>
           </View>
           <View>
               <Text>Recomendations</Text>
           </View>
           <View>
               <Text>Recents</Text>
           </View>
        </View>
    )
}

  