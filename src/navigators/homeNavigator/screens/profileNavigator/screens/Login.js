import React, { useState } from 'react';
import {
    View,
    ScrollView,
    TextInput,
    StyleSheet,
    Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import BigButton from '../../../../../components/BigButton';

const Login = ({navigation}) => {
    const { 
        container,
        scrollView,
        textInput,
        row
    } = styles;

    const [icon, setIcon] = useState('eye');
    const [passwordInput, setPasswordInput] = useState();
    
    return (
        <View style={container}>
            <ScrollView
                contentContainerStyle={scrollView}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
            >
                {/* E-mail input */}
                <TextInput
                    style={textInput}
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    placeholder='E-mail'
                    maxLength={150}
                    blurOnSubmit={false}
                    autoFocus={true}
                    onSubmitEditing={_ => passwordInput.focus()}
                />
                {/* Password input */}
                <View style={[row, textInput]}>
                    <TextInput
                        keyboardType='ascii-capable'
                        textContentType='password'
                        placeholder='Password'
                        secureTextEntry={icon === 'eye'}
                        style={{flex: 1}}
                        maxLength={12}
                        ref={ref => setPasswordInput(ref)}
                    />
                    <Pressable onPress={() => setIcon(icon === 'eye' ? 'eye-off' : 'eye')}>
                        <Feather name={icon} size={24} color="black"/>
                    </Pressable>
                </View>
                <View style={{marginTop: 15}}>
                    <BigButton
                        title={'Login'}
                        onPress={() => {
                                console.log('Login'); 
                                navigation.goBack(); 
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
        justifyContent: 'center'
    },
    scrollView: {
        marginTop: 30,
        alignItems: 'center',
        width: 380,
        height: 800,
    },
    textInput: {
        backgroundColor: 'white',
        width: 350,
        height: 80,
        marginVertical: 15,
        padding: 15,
        borderColor: 'grey',
        borderWidth: .5
    },
    row: {
        flexDirection: 'row', 
        alignItems: 'center'
    }
});

export default Login;
