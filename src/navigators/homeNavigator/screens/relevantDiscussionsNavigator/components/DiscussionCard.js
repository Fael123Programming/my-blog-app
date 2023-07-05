import React, { useState, useEffect } from 'react';
import {
    Pressable,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Fonts from '../../../../../utils/Fonts';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const GREEN = '#07850b';
const RED = '#de0000';

const DiscussionCard = ({
    data,
    onPressComment
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

    return (
        <View style={container}>
            <View style={userBar}>
                <View>
                    <Image
                        source={require('../../../../../../assets/images/profile/unknown.png')}
                        style={userImage}
                        resizeMode='contain'
                    />
                </View>
                <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={userName}>Marcos Rogel</Text>
                </View>
                <View>
                    <Text style={postedAt}>2023-07-01 11:20:30.058</Text>
                </View>
            </View>
            <View style={bodyContainer}>
                <View style={titleContainer}>
                    <Text style={titleText}>What's lorem ipsum?</Text>
                </View>
                <View style={descriptionContainer}>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also 
                        the leap into electronic typesetting, remaining essentially 
                        unchanged. It was popularised in the 1960s with the release of 
                        Letraset sheets containing Lorem Ipsum passages, and more recently 
                        with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </Text>
                </View>
                <View style={likeContainer}>
                    <View style={likeInnerContainer}>
                        <Pressable
                            onPress={_ => {
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
                        <Text style={count}>5</Text>
                    </View>
                    <View style={likeInnerContainer}>
                        <Pressable
                            onPress={_ => {
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
                        <Text style={count}>2</Text>
                    </View>
                    <View style={likeInnerContainer}>
                        <Pressable 
                            onPress={onPressComment}
                            onPressIn={_ => setCommentIcon('comment-multiple')}
                            onPressOut={_ => setCommentIcon('comment-multiple-outline')}
                        >
                            <MaterialCommunityIcons name={commentIcon} size={24} color="black" />
                        </Pressable>
                        <Text style={count}>3</Text>
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
        width: '100%',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
        padding: 15
    },
    userBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bodyContainer: {
        marginVertical: 10,
        paddingVertical: 10
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
