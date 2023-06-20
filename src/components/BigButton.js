import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import Fonts from '../utils/Fonts';
import Colors from '../utils/Colors';

const BigButton = ({onPress, title}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={[styles.text, Fonts.headlineMedium]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 50,
        padding: 5,
        backgroundColor: Colors.primaryKey,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white', 
        textAlignVertical: 'center'
    }
});

export default BigButton;
