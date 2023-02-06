import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, DailyDuas, AsmaulHusna, DuaRabbana} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeTabScreen = () => {
  const HomeTab = createBottomTabNavigator();
  return (
    <HomeTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'DailyDuas') {
            iconName = focused ? 'leaf' : 'leaf-outline';
          } else if (route.name === 'DuaRabbana') {
            iconName = focused ? 'heart-circle' : 'heart-circle-outline';
          } else if (route.name === 'AsmaulHusna') {
            iconName = focused ? 'create' : 'create-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'green',
        tabBarLabel: ({focused, color, size}) => (
          <Text
            style={{
              color: focused ? 'red' : color,
              fontSize: 10,
            }}>
            {route.name}
          </Text>
        ),
      })}>
      <HomeTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeTab.Screen
        name="DailyDuas"
        component={DailyDuas}
        options={{
          title: 'Daily Duas',
          headerShown: false,
        }}
      />
      <HomeTab.Screen name="DuaRabbana" component={DuaRabbana} />
      <HomeTab.Screen name="AsmaulHusna" component={AsmaulHusna} />
    </HomeTab.Navigator>
  );
};

export default HomeTabScreen;

const styles = StyleSheet.create({});
