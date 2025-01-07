import { StyleSheet } from 'react-native';
import colors from '../src/colors.js';

const splashScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottie: {
        flex: 1,
        position: 'absolute',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'serif',
        position: 'absolute',
        top: 120,
        color: colors.primary,
    },
    information: {
        fontSize: 15,
        fontFamily: 'sans-serif',
        position: 'absolute',
        bottom: 30,
        color: colors.placeholder
    }
});

export default splashScreenStyles;