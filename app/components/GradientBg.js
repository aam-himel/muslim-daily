import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const GradientBg = () => {
  return (
    <LinearGradient
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      colors={['#2EB3AE', '#53C2AC', '#5FBF9E']}
      style={styles.gradient}>
      <Text>hello</Text>
    </LinearGradient>
  );
};

export default GradientBg;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    height: '100%',
  },
});
