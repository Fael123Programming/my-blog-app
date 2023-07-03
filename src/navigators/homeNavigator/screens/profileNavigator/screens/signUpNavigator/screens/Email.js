import React, { useState, useEffect } from 'react';
import {
    Alert,
    Text,
    View,
    ScrollView,
    TextInput,
    StyleSheet
} from 'react-native';
import Fonts from '../../../../../../../utils/Fonts';
import BigButton from '../../../../../../../components/BigButton';
import { CommonActions } from '@react-navigation/native';

const validateEmail = email => {
    let regex = /[\w.-]+@[\w-]+(\.[a-z]+)+/;
    return regex.test(email);
};

const Email = ({route, navigation}) => {
    const [email, setEmail] = useState('');
    const [warning, setWarning] = useState(false);

    const {
        container,
        questionStyle,
        scrollView,
        warningStyle
    } = styles;

    // useEffect(() => navigation.addListener('beforeRemove', e => {
    //     let action = e.data.action;
    // }), [navigation]);

    const createAccount = () => {
        console.log('ACCOUNT CREATED');
    };

    return (
        <View style={container}>
            <ScrollView
                contentContainerStyle={scrollView}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
            >
                <Text style={questionStyle}>Type your e-mail</Text>
                <Text style={[warningStyle, warning ? {opacity: 1} : {opacity: 0}]}>Not a valid e-mail</Text>
                <TextInput
                    autoFocus={true}
                    style={styles.textInput}
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    placeholder='E-mail'
                    maxLength={150}
                    defaultValue={email}
                    onChangeText={text => {
                            if (!validateEmail(text))
                                setWarning(true);
                            else
                                setWarning(false);
                            setEmail(text);
                        }
                    }
                />
                <View style={{marginTop: 15}}>
                    <BigButton
                        title={'Next'}
                        onPress={_ => {
                                if (!validateEmail(email))
                                    setWarning(true);
                                else {
                                    setWarning(false);
                                    Alert.alert(
                                        'Account Created Successfully',
                                        'A login link was sent to your e-mail, so now it\'s only a click away from you to get into your account once our app is passwordless!',
                                        [
                                            {
                                                text: 'Ok',
                                                onPress: () => {
                                                    createAccount();
                                                    const resetAction = CommonActions.reset({
                                                        index: 0,
                                                        routes: [
                                                            {
                                                                name: 'ProfileNavigator'
                                                            }
                                                        ]
                                                    });
                                                    navigation.dispatch(resetAction);
                                                }
                                            }
                                        ]
                                    );
                                }
                            }
                        }
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    questionStyle: {
        ...Fonts.headlineSmall
    },
    textInput: {
        backgroundColor: 'white',
        width: 350,
        height: 80,
        marginBottom: 15,
        padding: 15,
        borderColor: 'grey',
        borderWidth: .5
    },
    scrollView: {
        marginTop: 30,
        alignItems: 'center',
        width: 380,
        height: 800,
    },
    warningStyle: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginBottom: 5,
        ...Fonts.bodySmall,
        color: 'red',
        fontStyle: 'italic'
    }
});

export default Email;
