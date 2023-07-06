import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RelevantDiscussionsNavigator from './screens/relevantDiscussionsNavigator/RelevantDiscussionsNavigator';
import FilterDiscussions from "./screens/FilterDiscussions";
import ReachUser from "./screens/ReachUser";
import ProfileNavigator from './screens/profileNavigator/ProfileNavigator';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="relevant"
            screenOptions={({ route }) =>({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name == 'Relevant')
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    else if (route.name == 'Filter')
                        iconName = focused ? 'filter' : 'filter-outline';
                    else if (route.name == 'Reach')
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                    else if (route.name === 'ProfileNavigator')
                        iconName = focused ? 'person' : 'person-outline';
                    else
                        iconName = 'help';
                    return <Ionicons name={iconName} size={24} color="purple"/>;
                },
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: 'purple',
                tabBarHideOnKeyboard: true
            })}
        >
            <Tab.Screen 
                name='Relevant' 
                component={RelevantDiscussionsNavigator}
                options={
                    {
                        tabBarLabel: 'Relevant', 
                        headerShown: false
                    }
                }
            />
            <Tab.Screen name='Filter' component={FilterDiscussions}/>
            <Tab.Screen name='Reach' component={ReachUser}/>
            <Tab.Screen 
                name='ProfileNavigator' 
                component={ProfileNavigator} 
                options={{tabBarLabel: 'Profile'}}
            />
        </Tab.Navigator>
    );
};

export default HomeNavigator;
