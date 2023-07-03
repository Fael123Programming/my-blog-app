import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';
import Fonts from '../../../../../utils/Fonts';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { selectUserData, setUserDataAsync } from '../../../../../features/userData/userDataSlice';
import AppActivityIndicator from '../../../../../components/AppActivityIndicator';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const IMAGES = '../../../../assets/images/';

const Profile = ({navigation}) => {
    const userData = useAppSelector(selectUserData);
    const userDataStatus = useAppSelector(status => status.userData.status);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setUserDataAsync());
    }, []);

    if (userDataStatus === 'loading')
        return <AppActivityIndicator/>

    const {
        container
    } = styles;

    const {
        displaySmall
    } = Fonts;

    if (userData.value)
        return (
            <SafeAreaView style={container}>
                <Text style={displaySmall}>Profile</Text>
            </SafeAreaView>
        );
    
    const {
        title,
        text,
        innerContainer,
    } = styles;
    
    const signIn = () => navigation.navigate('Login');

    const signUp = () => navigation.navigate('SignUpNavigator');

    return (
        <SafeAreaView style={container}>
            <Text style={title}>No Account Detected</Text>
            <View style={innerContainer}>
                <Pressable 
                    style={container}
                    onPress={signIn}
                >
                    <MaterialCommunityIcons name="login-variant" size={24} color="purple" />
                    <Text style={text}>Log In</Text>
                </Pressable>
                <Pressable 
                    style={container}
                    onPress={signUp}
                >
                    <Ionicons name="create" size={24} color="purple" />
                    <Text style={text}>Sign Up</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
    },
    title: {
        ...Fonts.displaySmall,
        fontWeight: 'bold',
        fontFamily: 'serif',
        textAlign: 'center'
    },
    text: {
        ...Fonts.bodyLarge,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    innerContainer: {
        flexDirection: 'row', 
        width: 300, 
        justifyContent: 'space-evenly'
    },
});

export default Profile;
