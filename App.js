import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeScreen, DailyDuas, DuaRabbana, AsmaulHusna} from './app/screens';
import {theme} from './app/config/theme';
import {useColorScheme} from 'react-native';
import SkiaPlayground from './app/screens/SkiaPlayground';

function App() {
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
      nav>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DailyDuas"
          component={DailyDuas}
          options={{
            title: 'Daily Duas',
            headerShown: false,
          }}
        />
        <Stack.Screen name="DuaRabbana" component={DuaRabbana} />

        <Stack.Screen name="AsmaulHusna" component={AsmaulHusna} />
        <Stack.Screen
          name="Playground"
          component={SkiaPlayground}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
