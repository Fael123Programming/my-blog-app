import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Pressable,
    Text,
    TextInput,
    Dimensions,
    Alert
} from 'react-native';
import CommentCard from '../components/CommentCard';
import { Ionicons } from '@expo/vector-icons';
import { getAuth } from 'firebase/auth';

const DiscussionComments = ({route, navigation}) => {
    const [comment, setComment] = useState('');
    const { comments } = route.params;

    const {
        container,
        textBox,
        textInput,
        noCommentsBox,
        noCommentsStyle
    } = styles;

    const addComment = () => {
        if (!getAuth().currentUser) {
            Alert.alert('Not Logged In', 'You\'ll need to log in to an account first to write comments.');
            return;
        }
        console.log('ADD COMMENT');
    };

    return (
        <View style={container}>
            {
                !comments.length ? (
                    <View style={noCommentsBox}>
                        <Text style={noCommentsStyle}>No Comments Yet</Text>
                    </View>
                ) : (
                    <FlatList
                        data={comments}
                        renderItem={({item}) => <CommentCard data={item}/>}
                        ItemSeparatorComponent={_ => <View style={{borderTopColor: 'black', borderTopWidth: 1}}/>}
                    />
                )
            }
            <View style={textBox}>
                <TextInput
                    defaultValue={comment}
                    onChangeText={text => setComment(text)}
                    style={textInput}
                    placeholder='Comment'
                    placeholderTextColor={'white'}
                />
                <Pressable onPress={addComment}>
                    <Ionicons name="send" size={20} color="white"/>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: 'purple',
        color: 'white'
    },
    textInput: {
        color: 'white', 
        flex: 1, 
        marginRight: 10
    },
    noCommentsBox: {
        flex: 1, 
        justifyContent: 'center'
    },
    noCommentsStyle: {
        fontWeight: 'bold'
    }
});

export default DiscussionComments;
