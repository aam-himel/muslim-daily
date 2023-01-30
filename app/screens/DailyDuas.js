import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBg from '../components/GradientBg';

const DailyDuas = () => {
  return (
    <View style={styles.container}>
      <GradientBg />
    </View>
  );
};

export default DailyDuas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
