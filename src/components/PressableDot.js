import {
    Pressable,
    StyleSheet,
    Text
} from 'react-native';
import Fonts from '../utils/Fonts';

const PressableDot = ({onPress, highlight=false}) => {
    return (
        <Pressable
            style={{ margin: 10 }}
            onPress={onPress}
        >
            <Text style={[Fonts.headlineMedium, {color: highlight ? 'black' : '#cfcfcf'}, styles.text]}>.</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: { 
        fontWeight: 'bold', 
        margin: 10 
    }
});

export default PressableDot;
