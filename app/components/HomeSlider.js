import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

const HomeSlider = () => {
  const {width} = Dimensions.get('screen');
  console.log(width - 16);
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width - 32}
        height={width / 3}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={2000}
        onSnapToItem={index => console.log('current index:', index)}
        pagingEnabled={true}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              backgroundColor: 'blue',
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>
              {index}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeSlider;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
