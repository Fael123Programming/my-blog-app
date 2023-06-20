import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import WhatWeAreScreen from "./screens/WhatWeAreScreen";

const Stack = createStackNavigator();

const PresentationNavigator = () => 
    <Stack.Navigator>
        <Stack.Screen 
            name='Welcome' 
            component={WelcomeScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name='WhatWeAre' 
            component={WhatWeAreScreen}
            options={{headerShown: false}}
        />
        
    </Stack.Navigator>;

export default PresentationNavigator;
