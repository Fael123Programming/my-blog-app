import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar
} from 'react-native';
import Fonts from '../../../utils/Fonts';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectUserData, setUserDataAsync } from '../../../features/userData/userDataSlice';
import AppActivityIndicator from '../../../components/AppActivityIndicator';

const IMAGES = '../../../../assets/images/';

const ProfileScreen = ({navigation}) => {
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
        imageStyle,
        innerContainer,
        myBlogTitle,
        bodyText,
        underlined
    } = styles;
    
    const signIn = () => {
        console.log('SIGN IN');
    };

    const signUp = () => {
        console.log('SIGN UP');
    };

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require(IMAGES + 'profile/man.jpg')}
                style={imageStyle}
                resizeMode='cover'
            >
                <View style={innerContainer}>
                    <Text style={myBlogTitle}>My Blog</Text>
                    <Text style={bodyText}>
                        You're very welcome to our community of bloggers all 
                        around the world!
                    </Text>
                    <View>
                        <Text style={bodyText}>Feel free to explore it and share with others!</Text>
                        <View>
                            <Text style={bodyText}>Yet not signed in? </Text> 
                            <Text style={bodyText}>Why don't you <Text style={underlined} onPress={signIn}>do it</Text> or <Text style={underlined} onPress={signUp}>create a new account</Text>?</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    innerContainer: {
        flex: 1,
        opacity: .8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'black'
    },
    imageStyle: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginTop: StatusBar.currentHeight || 0
    },
    myBlogTitle: {
        ...Fonts.displaySmall,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    bodyText: {
        ...Fonts.bodyLarge,
        color: 'white',
        textAlign: 'center',
        margin: 5,
        fontWeight: '500',
        fontFamily: 'serif',
        lineHeight: 30
    },
    underlined: {
        textDecorationLine: 'underline'
    }
});

export default ProfileScreen;
