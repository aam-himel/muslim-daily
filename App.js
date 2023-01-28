
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator, DefaultTheme, DarkTheme } from '@react-navigation/native-stack';

import {HomeScreen, DailyDuas, DuaRabbana, AsmaulHusna} from './app/screens'
import { theme } from './app/config/theme';
import { useColorScheme } from 'react-native';

function App(){
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();
  return (

    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
       <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='DailyDuas' component={DailyDuas} options={{
          title: 'Daily Duas',
          headerStyle: {
            backgroundColor: '#8B6BEC',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name='DuaRabbana' component={DuaRabbana} options={{ headerShown: false }} />
        <Stack.Screen name='AsmaulHusna' component={AsmaulHusna}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
