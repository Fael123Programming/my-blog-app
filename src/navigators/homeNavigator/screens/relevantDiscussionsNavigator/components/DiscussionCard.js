import React, { useState, useEffect } from 'react';
import {
    Alert,
    Pressable,
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import Fonts from '../../../../../utils/Fonts';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { fetchUserDataOfAsync } from '../../../../../../service';
import { getAuth } from 'firebase/auth';

const GREEN = '#07850b';
const RED = '#de0000';

const DiscussionCard = ({
    data,
    onPressComment,
}) => {
    const {
        container,
        userBar,
        bodyContainer,
        userImage,
        descriptionContainer,
        titleContainer,
        titleText,
        userName,
        likeContainer,
        postedAt,
        count,
        likeInnerContainer
    } = styles;

    const [likeIcon, setLikeIcon] = useState('like2');
    const [dislikeIcon, setDislikeIcon] = useState('dislike2');

    const [likeIconColor, setLikeIconColor] = useState('black');
    const [dislikeIconColor, setDislikeIconColor] = useState('black');
    const [commentIcon, setCommentIcon] = useState('comment-multiple-outline');

    const [user, setUser] = useState(null);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        (async () => {
            setUser(await fetchUserDataOfAsync(data.userId, ['name', 'surname']));
        })();
    }, []);

    if (!user)
        return null;

    return (
        <View style={container}>
            <View style={{alignSelf: 'flex-end'}}>
                <Text style={postedAt}>{data?.postedAt?.replace('T', ' ').replace('Z', '')}</Text>
            </View>
            <View style={userBar}>
                <View>
                    <Image
                        source={require('../../../../../../assets/images/profile/unknown.png')}
                        style={userImage}
                        resizeMode='contain'
                    />
                </View>
                <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={userName}>{user?.name + ' ' + user?.surname}</Text>
                </View>
            </View>
            <View style={bodyContainer}>
                <View style={titleContainer}>
                    <Text style={titleText}>{data?.title}</Text>
                </View>
                <View style={descriptionContainer}>
                    <Text>{data?.description}</Text>
                </View>
                <View style={likeContainer}>
                    <View style={likeInnerContainer}>
                        <Pressable
                            onPress={_ => {
                                    const auth = getAuth();
                                    if (!auth.currentUser) { // No user logged in.
                                        Alert.alert('Not Logged In', 'Sorry about that but to like a post you should be logged in to an account.');
                                        return;
                                    }
                                    if (dislikeIcon === 'dislike1') {
                                        setDislikeIcon('dislike2');
                                        setDislikeIconColor('black');
                                    }
                                    let newIcon, newIconColor;
                                    if (likeIcon === 'like2') {
                                        newIcon = 'like1';
                                        newIconColor = GREEN;
                                    } else {
                                        newIcon = 'like2';
                                        newIconColor = 'black';
                                    }
                                    setLikeIcon(newIcon);
                                    setLikeIconColor(newIconColor);
                                }
                            }
                        >
                            <AntDesign name={likeIcon} size={24} color={likeIconColor}/>
                        </Pressable>
                        <Text style={count}>{data?.likes?.length}</Text>
                    </View>
                    <View style={likeInnerContainer}>
                        <Pressable
                            onPress={_ => {
                                    const auth = getAuth();
                                    if (!auth.currentUser) { // No user logged in.
                                        Alert.alert('Not Logged In', 'Sorry about that but to dislike a post you should be logged in to an account.');
                                        return;
                                    }
                                    if (likeIcon === 'like1') {
                                        setLikeIcon('like2');
                                        setLikeIconColor('black');
                                    }
                                    let newIcon, newIconColor;
                                    if (dislikeIcon === 'dislike2') {
                                        newIcon = 'dislike1';
                                        newIconColor = RED;
                                    } else {
                                        newIcon = 'dislike2';
                                        newIconColor = 'black';
                                    }
                                    setDislikeIcon(newIcon);
                                    setDislikeIconColor(newIconColor);
                                }
                            }
                        >
                            <AntDesign name={dislikeIcon} size={24} color={dislikeIconColor}/>
                        </Pressable>
                        <Text style={count}>{data?.dislikes?.length}</Text>
                    </View>
                    <View style={likeInnerContainer}>
                        <Pressable 
                            onPress={onPressComment}
                            onPressIn={_ => setCommentIcon('comment-multiple')}
                            onPressOut={_ => setCommentIcon('comment-multiple-outline')}
                        >
                            <MaterialCommunityIcons name={commentIcon} size={24} color="black" />
                        </Pressable>
                        <Text style={count}>{data?.comments?.length}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 15,
        padding: 15,
        borderRadius: 5
    },
    userBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bodyContainer: {
        marginTop: 10
    },
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 30
    },
    userName: {
        ...Fonts.bodyLarge,
        fontWeight: 'bold'
    },
    descriptionContainer: {
        marginBottom: 20
    },
    titleContainer: {
        marginBottom: 10
    },
    titleText: {
        fontWeight: 'bold',
        ...Fonts.headlineSmall
    },
    likeContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    postedAt: {
        fontWeight: '500',
        fontSize: 10
    },
    likeInnerContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: 20
    },
    count: {
        fontWeight: 'bold',
        fontSize: 10
    }
});

export default DiscussionCard;
