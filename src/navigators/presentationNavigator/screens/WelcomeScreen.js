import React, { useState, useRef, useEffect } from 'react';
import {
    Animated,
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import Colors from '../../../utils/Colors';
import Fonts from '../../../utils/Fonts';
import { StackActions } from '@react-navigation/native';

const IMAGES = '../../../../assets/images/';

const WelcomeScreen = ({navigation}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [txtColor, setTxtColor] = useState(Colors.primaryKey);
    const [txtWeight, setTxtWeight] = useState('bold');

    const welcomeFadeIn = _ => 
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true
        }).start(() => {
            setTxtColor('black');
            setTxtWeight('bold');
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 3000,
                useNativeDriver: true
            }).start(() => {
                navigation.dispatch(StackActions.replace('WhatWeAre'));
            });
        });

    useEffect(() => {
        welcomeFadeIn();
    }, []);

    const {
        container,
        imageStyle,
        text
    } = styles;

    return (
        <View style={container}>
            <Animated.View
                style={{ opacity: fadeAnim }}
            >   
                <Image
                    source={require(IMAGES + 'presentation/welcome_screen.jpg')}
                    style={imageStyle}
                    resizeMode='contain'
                />
                <Text style={text}>
                    Welcome to <Text style={{color: txtColor, fontWeight: txtWeight}}>Your Blog App</Text>
                </Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.extras.white
    },
    text: {
        ...Fonts.headlineLarge, 
        color: Colors.primaryKey, 
        textAlign: 'center',
        fontWeight: 'bold'
    },
    imageStyle: {
        width: 250, 
        height: 250, 
        alignSelf: 'center'
    }
});

export default WelcomeScreen;
