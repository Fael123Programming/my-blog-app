import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RelevantDiscussionsScreen from "./screens/RelevantDiscussionsScreen";
import FilterDiscussionsScreen from "./screens/FilterDiscussionsScreen";
import ReachUserScreen from "./screens/ReachUserScreen";
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Relevant"
            screenOptions={({ route }) =>({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name == 'Relevant')
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    else if (route.name == 'Filter')
                        iconName = focused ? 'filter' : 'filter-outline';
                    else if (route.name == 'Reach')
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                    else if (route.name === 'Profile')
                        iconName = focused ? 'person' : 'person-outline';
                    else
                        iconName = 'help';
                    return <Ionicons name={iconName} size={24} color="black" />;
                },
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: 'black'
            })}
        >
            <Tab.Screen name='Relevant' component={RelevantDiscussionsScreen}/>
            <Tab.Screen name='Filter' component={FilterDiscussionsScreen}/>
            <Tab.Screen name='Reach' component={ReachUserScreen}/>
            <Tab.Screen name='Profile' component={ProfileScreen}/>
        </Tab.Navigator>
    );
};

export default HomeNavigator;
