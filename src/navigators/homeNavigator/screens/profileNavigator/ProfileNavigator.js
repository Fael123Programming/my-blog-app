import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './screens/Profile';
import Login from './screens/Login';
import SignUpNavigator from './screens/signUpNavigator/SignUpNavigator';

const Stack = createStackNavigator();

const ProfileNavigator = _ => 
    <Stack.Navigator
        screenOptions={{headerTitle: ''}}
    >
        <Stack.Screen
            name='Profile'
            component={Profile}
        />
        <Stack.Screen
            name='Login'
            component={Login}
        />
        <Stack.Screen
            name='SignUpNavigator'
            component={SignUpNavigator}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
;

export default ProfileNavigator;
