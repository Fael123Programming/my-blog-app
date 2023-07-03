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
import DatePicker from 'react-native-modern-datepicker';

const formatDate = (date, sep='-', splitBy='-') => {
    if (!date)
        return '';
    let dateParts = date.split(splitBy);
    return dateParts[0] + sep + dateParts[1] + sep + dateParts[2];
}

const getToday = _ => {
    return new Date().toISOString().split('T')[0];
};

const getCurrentAge = birthday => {
    const date = new Date(birthday), today = new Date();
    let years = today.getFullYear() - date.getFullYear();
    const dateMonth = date.getMonth(), todayMonth = today.getMonth();
    if (dateMonth > todayMonth)
        years--;
    else if (dateMonth == todayMonth)
        if (date.getDate() > today.getDate())
            years--;
    return years;
};

const DateOfBirth = ({route, navigation}) => {
    const [dateOfBirth, setDateOfBirth] = useState(getToday());
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
                <Text style={questionStyle}>When were you born?</Text>
                <Text style={[warningStyle, warning ? {opacity: 1} : {opacity: 0}]}>You must be at least 18 years old</Text>
                <DatePicker
                    mode={'calendar'}
                    current={dateOfBirth}
                    selected={dateOfBirth}
                    onDateChange={date => {
                            let formattedDate = formatDate(date, '-', '/');
                            if (getCurrentAge(formattedDate) < 18)
                                setWarning(true);
                            else
                                setWarning(false);
                            setDateOfBirth(formattedDate);
                        }
                    }
                />
                <View style={{marginTop: 15}}>
                    <BigButton
                        title={'Next'}
                        onPress={_ => {
                                if (getCurrentAge(dateOfBirth) < 18)
                                    setWarning(true);
                                else {
                                    setWarning(false);
                                    navigation.navigate('Email');
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

export default DateOfBirth;
