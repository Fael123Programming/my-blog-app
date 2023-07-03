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

const Surname = ({route, navigation}) => {
    const [surname, setSurname] = useState('');
    const [warning, setWarning] = useState(false);

    const {
        container,
        questionStyle,
        scrollView,
        warningStyle
    } = styles;

    return (
        <View style={container}>
            <ScrollView
                contentContainerStyle={scrollView}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
            >
                <Text style={questionStyle}>And your surname?</Text>
                <Text style={[warningStyle, warning ? {opacity: 1} : {opacity: 0}]}>Can't be empty</Text>
                <TextInput
                    autoFocus={true}
                    style={styles.textInput}
                    keyboardType='ascii-capable'
                    textContentType='name'
                    placeholder='Surname'
                    maxLength={150}
                    defaultValue={surname}
                    onChangeText={text => {
                            if (!text.length)
                                setWarning(true);
                            else
                                setWarning(false);
                            setSurname(text);
                        }
                    }
                />
                <View style={{marginTop: 15}}>
                    <BigButton
                        title={'Next'}
                        onPress={_ => {
                                if (!surname.length)
                                    setWarning(true);
                                else {
                                    setWarning(false);
                                    navigation.navigate('DateOfBirth');
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

export default Surname;
