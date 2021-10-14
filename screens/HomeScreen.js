import React from 'react';
import { TouchableOpacity, Text, View,Image,ScrollView } from 'react-native';
import homeStyles from '../styles/home';
export default function HomeScreen({ navigation }){
    return(
        <View style={homeStyles.container}>
           <View style={homeStyles.header}>
               <Text style={homeStyles.title}>Dinery</Text>
           </View>
           <Text style={{fontSize:20,fontWeight:300,margin:10}}>Recommendations for you...</Text>
           <ScrollView style={homeStyles.recs} horizontal={true}>
               
               <TouchableOpacity style={homeStyles.rec}>
                   <Text>Recommendation</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.rec}>
                   <Text>Recommendation</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.rec}> 
                   <Text>Recommendation</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.rec}> 
                   <Text>Recommendation</Text>
               </TouchableOpacity>
           </ScrollView>
           <Text style={{fontSize:20,fontWeight:300,margin:10}}>Recent Orders</Text>
           <ScrollView style={homeStyles.recents}>
               <TouchableOpacity style={homeStyles.order}>
                   <Text>Order</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.order}>
                   <Text>Order</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.order}>
                   <Text>Order</Text>
               </TouchableOpacity>
               <TouchableOpacity style={homeStyles.order}>
                   <Text>Order</Text>
               </TouchableOpacity>
           </ScrollView>
        </View>
    )
}

  