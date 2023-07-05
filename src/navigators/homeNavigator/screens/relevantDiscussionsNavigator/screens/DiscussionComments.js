import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const DiscussionComments = () => {
    const {
        container
    } = styles;

    return (
        <View style={container}>
            <Text>Discussion Comment</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default DiscussionComments;
