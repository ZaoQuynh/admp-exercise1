import React from "react";
import { View, Text } from "react-native";
import mainScreenStyles from "../styles/mainScreenStyles.js";

const HomeScreen = () => {
    return (
        <View style={mainScreenStyles.container}>
            <Text style={mainScreenStyles.text}>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;