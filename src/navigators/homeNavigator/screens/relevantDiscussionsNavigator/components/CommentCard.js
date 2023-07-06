import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import { fetchUserDataOfAsync } from '../../../../../../service';
import Fonts from '../../../../../utils/Fonts';

const CommentCard = ({data}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => setUser(await fetchUserDataOfAsync(data.userId, ['name', 'surname'])))();
    }, []);

    if (!user)
        return null;

    const { 
        container,
        userBar,
        userName,
        commentedAt,
        userImage,
        bodyContainer,
        marginHor
    } = styles;

    return (
        <View style={container}>
            <View style={{alignSelf: 'flex-end'}}>
                <Text style={commentedAt}>{data?.commentedAt?.replace('T', ' ').replace('Z', '')}</Text>
            </View>
            <View style={userBar}>
                <View style={{alignSelf: 'flex-start'}}>
                    <Image
                        source={require('../../../../../../assets/images/profile/unknown.png')}
                        style={userImage}
                        resizeMode='contain'
                    />
                </View>
                <View style={marginHor}>
                    <Text style={userName}>{user?.name + ' ' + user?.surname}</Text>
                </View>
            </View>
            <View style={bodyContainer}>
                <Text>{data?.body}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        padding: 15,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    userBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        ...Fonts.bodyMedium,
        fontWeight: 'bold'
    },
    commentedAt: {
        fontWeight: '500',
        fontSize: 10,
        textAlign: 'right'
    },
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 30
    },
    bodyContainer: {
        marginTop: 10
    },
    marginHor: {
        marginHorizontal: 15
    }
});

export default CommentCard;
