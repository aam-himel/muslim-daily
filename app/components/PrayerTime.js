import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {prayertimes} from '../data/prayertime';

const PrayerTime = () => {
  return (
    <View>
      <Text style={styles.title}>নামাজের সময় সূচী</Text>
      {prayertimes.map(prayer => (
        <View key={prayer.id} style={styles.prayerItem}>
          <Text style={styles.text}>{prayer.title}</Text>
          <Text style={styles.text}>{prayer.time}</Text>
        </View>
      ))}
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
  },
});
