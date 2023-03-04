import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {prayertimes} from '../data/prayertime';

const PrayerTime = ({title, time}) => {
  return (
    <View style={styles.prayerItem}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
};

export default PrayerTime;

const styles = StyleSheet.create({
  prayerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
