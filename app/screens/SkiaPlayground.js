import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {Dimensions} from 'react-native/Libraries/Utilities/Dimensions';

const SkiaPlayground = () => {
  return (
    <View style={styles.container}>
      <Lottie source={require('../lotties/test.json')} autoPlay loop />
    </View>
  );
};

export default SkiaPlayground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
