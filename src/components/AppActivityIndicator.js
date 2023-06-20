import React from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    StyleSheet
} from 'react-native';
import Colors from '../utils/Colors';

const AppActivityIndicator = ({msg=''}) => {
    const {
        container
    } = styles;

    return (
        <View style={container}>
            {
                msg && <Text>{msg}</Text>
            }
            <ActivityIndicator size={'large'} color={Colors.primaryKey}/>
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

export default AppActivityIndicator;
