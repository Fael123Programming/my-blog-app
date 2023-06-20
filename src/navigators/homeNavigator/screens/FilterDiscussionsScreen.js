import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native';
import Fonts from '../../../utils/Fonts';

const FilterDiscussionsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={Fonts.displaySmall}>Filter Discussions</Text>
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

export default FilterDiscussionsScreen;
