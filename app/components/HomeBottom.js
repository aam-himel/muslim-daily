import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SahriIftarTime from './SahriIftarTime';
import HomeSlider from './HomeSlider';
import PrayerTime from './PrayerTime';
import CategoryScrollList from './CategoryScrollList';

const HomeBottom = ({prayerTimes}) => {
  return (
    <View style={styles.container}>
      <SahriIftarTime />
      {/* <HomeSlider /> */}
      <PrayerTime prayerTimes={prayerTimes} />
      <CategoryScrollList />
    </View>
  );
};

export default HomeBottom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginVertical: 16,
    marginHorizontal: 16,
  },
});
