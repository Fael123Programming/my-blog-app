import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    SectionList,
    FlatList
} from 'react-native';
import Fonts from '../../../../../utils/Fonts';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { selectRelevantDiscussions, setRelevantDiscussionsAsync } from '../../../../../features/relevantDiscussions/relevantDiscussionsSlice';
import DiscussionCard from '../components/DiscussionCard';

const RelevantDiscussions = ({route, navigation}) => {
    const [relevantDiscussionsState, setRelevantDiscussionsState] = useState({});

    const relevantDiscussions = useAppSelector(selectRelevantDiscussions);
    const relevantDiscussionsStatus = useAppSelector(status => status.relevantDiscussions.status);

    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(setRelevantDiscussionsAsync());
    }, []);

    useEffect(() => {
        if (relevantDiscussions?.value) {
            setRelevantDiscussionsState(relevantDiscussions.value);
            setLoading(false);
        }
    }, [relevantDiscussions]);

    const {
        container
    } = styles;

    return (
        <SafeAreaView style={container}>
            {
                relevantDiscussionsStatus === 'loading' || loading ? (
                    <ActivityIndicator size={'large'} color={'purple'}/>
                ) : (
                    <FlatList
                        data={relevantDiscussionsState}
                        renderItem={
                            (
                                {item}
                            ) => (
                                <DiscussionCard 
                                    data={item} 
                                    onPressComment={_ => navigation.navigate('DiscussionComments', {'comments': item.comments})}
                                />
                            )
                        }
                        keyExtractor={item => item.postId}
                    />
                )
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d6d6d6'
    }
});

export default RelevantDiscussions;
