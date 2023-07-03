import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    ScrollView,
    TextInput,
    StyleSheet
} from 'react-native';
import Fonts from '../../../../../../../utils/Fonts';
import BigButton from '../../../../../../../components/BigButton';

const Name = ({route, navigation}) => {
    const [name, setName] = useState('');
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

    return (
        <View style={container}>
            <ScrollView
                contentContainerStyle={scrollView}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
            >
                <Text style={questionStyle}>What's your name?</Text>
                <Text style={[warningStyle, warning ? {opacity: 1} : {opacity: 0}]}>Can't be empty</Text>
                <TextInput
                    autoFocus={true}
                    style={styles.textInput}
                    keyboardType='ascii-capable'
                    textContentType='name'
                    placeholder='Name'
                    maxLength={150}
                    defaultValue={name}
                    onChangeText={text => {
                            if (!text.length)
                                setWarning(true);
                            else
                                setWarning(false);
                            setName(text);
                        }
                    }
                />
                <View style={{marginTop: 15}}>
                    <BigButton
                        title={'Next'}
                        onPress={_ => {
                                if (!name.length)
                                    setWarning(true);
                                else {
                                    setWarning(false);
                                    navigation.navigate('Surname');
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

export default Name;
