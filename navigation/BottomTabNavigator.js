import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../components/HomeScreen.js';
import SettingScreen from '../components/SettingScreen.js';
import colors from '../src/colors.js';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarStyle: { 
                borderTopWidth: 0,
                height: 60,
                width: 'auto',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                margin: 20,
                padding: 10,
                borderRadius: 30,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarLabelStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 5
            },
            tabBarIconStyle: {
                paddingBottom: 5, 
            }
        }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
