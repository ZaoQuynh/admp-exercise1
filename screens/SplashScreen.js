import React, { useEffect } from 'react';
import { View, Text } from "react-native";
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import splashScreenStyles from '../styles/splashScreenStyles';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Main');
        }, 10000); //10 giây

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={splashScreenStyles.container}>
            <Text style={splashScreenStyles.title}>Book Hub</Text>
            <LottieView  
                style={splashScreenStyles.lottie}
                source={require('../assets/splash.json')} 
                autoPlay 
                loop />
            <Text style={splashScreenStyles.information}>Nguyễn Hà Quỳnh Giao - 21110171</Text>
        </View>
    );
}

export default SplashScreen;