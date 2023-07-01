import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PresentationNavigator from "./presentationNavigator/PresentationNavigator";
import HomeNavigator from "./homeNavigator/HomeNavigator";

const Stack = createStackNavigator();

const AppNavigation = () => 
    <NavigationContainer>
        <Stack.Navigator>
            {/* <Stack.Screen 
                name='Presentation' 
                component={PresentationNavigator}
                options={{headerShown: false}}
            /> */}
            <Stack.Screen 
                name='Home' 
                component={HomeNavigator}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>;

export default AppNavigation;
