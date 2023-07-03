import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Name from './screens/Name';
import Surname from './screens/Surname';
import DateOfBirth from './screens/DateOfBirth';
import Email from './screens/Email';

const Stack = createStackNavigator();

const SignUpNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Name'
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen 
                component={Name} 
                name='Name' 
                options={{headerShown: true, headerTitle: ''}}
            />
            <Stack.Screen 
                component={Surname} 
                name='Surname' 
                options={{headerShown: true, headerTitle: ''}}
            />
            <Stack.Screen 
                component={DateOfBirth} 
                name='DateOfBirth' 
                options={{headerShown: true, headerTitle: ''}}
            />
            <Stack.Screen 
                component={Email} 
                name='Email' 
                options={{headerShown: true, headerTitle: ''}}
            />
        </Stack.Navigator>
    );
};

export default SignUpNavigator;
