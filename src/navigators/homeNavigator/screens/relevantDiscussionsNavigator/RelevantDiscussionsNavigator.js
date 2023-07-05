import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RelevantDiscussions from './screens/RelevantDiscussions';
import DiscussionComments from './screens/DiscussionComments';

const Stack = createStackNavigator();

const RelevantDiscussionsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='RelevantDiscussions'
        >
            <Stack.Screen 
                component={RelevantDiscussions} 
                name='RelevantDiscussions'
                options={
                    {
                        headerTitle: 'Relevant Discussions',
                        headerTitleAlign: 'center'
                    }
                }
            />
            <Stack.Screen 
                component={DiscussionComments} 
                name='DiscussionComments'
                options={
                    {
                        headerTitle: 'Comments',
                        headerTitleAlign: 'center'
                    }
                }
            />
        </Stack.Navigator>
    );
};

export default RelevantDiscussionsNavigator;
