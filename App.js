import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native-stack';

import {useColorScheme} from 'react-native';
import HomeStackScreen from './app/navigation/HomeTabScreen';
import TasbihScreen from './app/screens/TasbihScreen';

function App() {
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();

  return (
    <NavigationContainer
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
      nav>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeStackScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Tasbih"
          component={TasbihScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
