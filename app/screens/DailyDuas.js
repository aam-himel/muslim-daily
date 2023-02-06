import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBg from '../components/GradientBg';

const DailyDuas = () => {
  return (
    <View style={styles.container}>
      <Text>Daily Duas</Text>
    </View>
  );
};

export default DailyDuas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
