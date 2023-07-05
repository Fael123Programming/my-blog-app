import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
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

    useEffect(() => {
        dispatch(setRelevantDiscussionsAsync());
    }, []);

    useEffect(() => {
        if (relevantDiscussions?.value)
            setRelevantDiscussionsState(relevantDiscussions.value);
    }, [relevantDiscussions]);

    return (
        <SafeAreaView style={styles.container}>
            <DiscussionCard
                onPressComment={_ => navigation.navigate('DiscussionComments')}
            />
            {/* <Text style={Fonts.displaySmall} onPress={_ => navigation.navigate('DiscussionComments')}>Relevant Discussions</Text> */}
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
