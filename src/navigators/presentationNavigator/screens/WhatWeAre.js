import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Animated,
    Dimensions,
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import Colors from '../../../utils/Colors';
import Fonts from '../../../utils/Fonts';
import PressableDot from '../../../components/PressableDot';
import BigButton from '../../../components/BigButton';

const IMAGES = '../../../../assets/images/';

const WhatWeAre = ({navigation}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const btnOpacity = useRef(new Animated.Value(0)).current;

    const [share, setShare] = useState();
    const [thoughts, setThoughts] = useState();
    const [network, setNetwork] = useState();

    const [title, setTitle] = useState();
    const [dot1, setDot1] = useState();
    const [dot2, setDot2] = useState();
    const [dot3, setDot3] = useState();

    const [btnVisible, setBtnVisible] = useState(false);

    useEffect(() => {
        state1();
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start(() => {
            Animated.timing(fadeAnim, {
                toValue: 0.8,
                duration: 5,
                useNativeDriver: true
            }).start(() => {
                state2();
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true
                }).start(() => {
                    Animated.timing(fadeAnim, {
                        toValue: 0.8,
                        duration: 5,
                        useNativeDriver: true
                    }).start(() => {
                        state3();
                        Animated.timing(fadeAnim, {
                            toValue: 1,
                            duration: 2000,
                            useNativeDriver: true
                        }).start(() => {
                            Animated.timing(btnOpacity, {
                                toValue: 1,
                                duration: 1000,
                                useNativeDriver: true
                            }).start(() => setBtnVisible(true));
                        });
                    });
                });
            })
        });
    }, []);

    const state1 = () => {
        setShare(true);
        setThoughts(false);
        setNetwork(false);
        setTitle('Share your ideas with others!')
        setDot1(true);
        setDot2(false);
        setDot3(false);
    };

    const state2 = () => {
        setShare(false);
        setThoughts(true);
        setNetwork(false);
        setTitle('See others\' thoughts!');
        setDot1(false);
        setDot2(true);
        setDot3(false);
    };

    const state3 = () => {
        setShare(false);
        setThoughts(false);
        setNetwork(true);
        setTitle('Make new friends and discuss your thinking!')
        setDot1(false);
        setDot2(false);
        setDot3(true);
    }

    const {
        container,
        upperContainer,
        titleTxt,
        imageStyle
    } = styles;

    const {
        headlineSmall
    } = Fonts;

    return (
        <Animated.View style={[container, {opacity: fadeAnim}]}> 
            <View style={upperContainer}>
                <Text style={[headlineSmall, titleTxt]}>{title}</Text>
                {
                    share && (
                        <Image
                            source={require(IMAGES + 'presentation/share.jpg')}
                            style={imageStyle}
                            resizeMode='contain'
                        />
                    )
                }
                {
                    thoughts && (
                        <Image
                            source={require(IMAGES + 'presentation/thoughts.jpg')}
                            style={imageStyle}
                            resizeMode='contain'
                        />
                    )
                }
                {
                    network && (
                        <Image
                            source={require(IMAGES + 'presentation/network.jpg')}
                            style={imageStyle}
                            resizeMode='contain'
                        />
                    )
                }
            </View>
            <View style={styles.dotContainer}>
                <PressableDot 
                    onPress={() => {
                            if (btnVisible)
                                state1();
                        }
                    }
                    highlight={dot1}
                />
                <PressableDot 
                    onPress={() => {
                            if (btnVisible)
                                state2();
                        }
                    }
                    highlight={dot2}
                />
                <PressableDot 
                    onPress={() => {
                            if (btnVisible)
                                state3();
                        }
                    }
                    highlight={dot3}
                />
            </View>
            <Animated.View style={{opacity: btnOpacity, marginTop: 25}}>
                <BigButton
                    onPress={() => navigation.dispatch(StackActions.replace('Home'))}
                    title={'Start'}
                />
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.extras.white
    },
    upperContainer: {
        width: Dimensions.get('window').width, 
        height: 600, 
        justifyContent: 'center'
    },
    dotContainer: {
        flexDirection: 'row', marginTop: 50
    },
    titleTxt: {
        fontWeight: '800', 
        textAlign: 'center'
    },
    imageStyle: {
        width: 400, 
        height: 400
    }
});

export default WhatWeAre;
