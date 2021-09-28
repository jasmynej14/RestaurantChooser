import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import allRestaurants from '../data/restaurants';
export default function SearchScreen(){
    return(
        <View style={styles.container}>
            <Text>Search/View Restaurants</Text>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  