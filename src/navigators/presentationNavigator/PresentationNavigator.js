import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./screens/Welcome";
import WhatWeAre from "./screens/WhatWeAre";

const Stack = createStackNavigator();

const PresentationNavigator = () => 
    <Stack.Navigator>
        <Stack.Screen 
            name='Welcome' 
            component={Welcome}
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name='WhatWeAre' 
            component={WhatWeAre}
            options={{headerShown: false}}
        />
        
    </Stack.Navigator>;

export default PresentationNavigator;
