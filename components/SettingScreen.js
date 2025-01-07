import React from "react";
import { View, Text } from "react-native";
import mainScreenStyles from "../styles/mainScreenStyles.js";

const SettingScreen = () => {
    return (
        <View style={mainScreenStyles.container}>
            <Text style={mainScreenStyles.text}>Setting Screen</Text>
        </View>
    );
};

export default SettingScreen;