import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ProfileStack = createNativeStackNavigator()
import ProfileScreen from './ProfileScreen';
import CreateAccount from './CreateAccount';
export default function UsersScreens(){

    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="UserProfile" component={ProfileScreen} 
                options={{
                    headerShown:false
                }}
            />
            <ProfileStack.Screen name="Create" component={CreateAccount} 
                options={{
                    headerShown:false
                }}
            />

        </ProfileStack.Navigator>
    )
}