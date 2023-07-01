import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './screens/Profile';
import Login from './screens/Login';

const Stack = createStackNavigator();

const ProfileNavigator = ({navigate}) => 
    <Stack.Navigator
        screenOptions={{headerTitle: ''}}
    >
        <Stack.Screen
            name='profile'
            component={Profile}
        />
        <Stack.Screen
            name='login'
            component={Login}
        />
    </Stack.Navigator>
;

export default ProfileNavigator;
