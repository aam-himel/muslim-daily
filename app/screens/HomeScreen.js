import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import moment from 'moment';

import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

import LocationSvg from '../svgs/Location';
import SunRiseSvg from '../svgs/SunRise';
import PrayerTime from '../components/PrayerTime';
import SahriIftarTime from '../components/SahriIftarTime';

const {height, width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const url =
    'https://api.aladhan.com/v1/timingsByCity/07-03-2023?city=Magura&country=Bangladesh&method=2';
  // useEffect(() => {
  //   // get user location
  //   Geolocation.getCurrentPosition(info => console.log(info));
  //   // featching api data
  //   const fetchData = async () => {
  //     const result = await axios.get(url);
  //     setData(result.data);
  //     console.log(result.data);
  //   };
  //   fetchData();
  // }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const {code, status, data: apiData} = data;
  const {timings} = apiData;
  const {Sunrise, Sunset} = timings;
  const {Fajr, Dhuhr, Asr, Maghrib, Isha} = timings;

  const dailyPrayers = {
    Fajr,
    Dhuhr,
    Asr,
    Maghrib,
    Isha,
  };

  return (
    <>
      <SafeAreaView style={[styles.container]}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.topSection}>
            <View style={[styles.box]}>
              <View>
                <LocationSvg />
              </View>
              <View>
                <Text style={styles.text}>Magura, Bangladesh </Text>
              </View>
            </View>
            <View style={[styles.box]}>
              <View>
                <SunRiseSvg />
              </View>
              <View style={styles.sunTime}>
                <View>
                  <Text style={styles.text}>সূর্যোদয়</Text>
                  <Text style={styles.text}>{Sunrise}</Text>
                </View>
                <View>
                  <Text style={styles.text}>সূর্যাস্ত</Text>
                  <Text style={styles.text}>{Sunset}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <SahriIftarTime />
            <Text style={styles.sectionTitle}>নামাজের সময় সূচী</Text>

            {Object.entries(dailyPrayers).map(([key, value]) => (
              <PrayerTime key={key} title={key} time={value} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    height: 200,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#233E8B',
  },
  bottomSection: {
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  box: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  sectionTitle: {
    marginVertical: 24,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#fff',
    paddingLeft: 12,
    fontWeight: 500,
  },
  sunTime: {
    flexDirection: 'row',
  },
});
