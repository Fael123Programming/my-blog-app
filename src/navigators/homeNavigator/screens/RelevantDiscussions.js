import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Fonts from '../../../utils/Fonts';

const RelevantDiscussions = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={Fonts.displaySmall}>Relevant Discussions</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});

export default RelevantDiscussions;
