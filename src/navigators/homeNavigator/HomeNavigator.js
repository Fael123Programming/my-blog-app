import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RelevantDiscussions from "./screens/RelevantDiscussions";
import FilterDiscussions from "./screens/FilterDiscussions";
import ReachUser from "./screens/ReachUser";
import ProfileNavigator from './screens/profile_navigator/ProfileNavigator';
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
                tabBarActiveTintColor: 'black',
                tabBarHideOnKeyboard: true
            })}
        >
            <Tab.Screen name='Relevant' component={RelevantDiscussions}/>
            <Tab.Screen name='Filter' component={FilterDiscussions}/>
            <Tab.Screen name='Reach' component={ReachUser}/>
            <Tab.Screen name='Profile' component={ProfileNavigator}/>
        </Tab.Navigator>
    );
};

export default HomeNavigator;
