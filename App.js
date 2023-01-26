
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator, DefaultTheme, DarkTheme } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { theme } from './src/config/theme';
import { useColorScheme } from 'react-native';

function App(){
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();
  return (

    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
       <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
