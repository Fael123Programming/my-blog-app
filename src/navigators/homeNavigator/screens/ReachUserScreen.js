import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native';
import Fonts from '../../../utils/Fonts';

const ReachUserScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={Fonts.displaySmall}>Reach User</Text>
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

export default ReachUserScreen;
