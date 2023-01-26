import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation;