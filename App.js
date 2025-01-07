import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}  
          options={{ headerShown: false, title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
