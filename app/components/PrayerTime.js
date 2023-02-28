import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {prayertimes} from '../data/prayertime';

const PrayerTime = ({prayerTimes}) => {
  const {Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha} = prayerTimes;
  const prayerArray = [
    {title: 'Fajr', time: Fajr},
    {title: 'Dhuhr', time: Dhuhr},
    {title: 'Asr', time: Asr},
    {title: 'Maghrib', time: Maghrib},
    {title: 'Isha', time: Isha},
    {title: 'Sunrise', time: Sunrise},
  ];
  console.log(prayerArray);
  return (
    <View>
      <Text style={styles.title}>নামাজের সময় সূচী</Text>
      {prayerArray.map((prayer, index) => (
        <View key={index} style={styles.prayerItem}>
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
