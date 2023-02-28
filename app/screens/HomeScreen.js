import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import HomeBottom from '../components/HomeBottom';
import LocationSvg from '../svgs/Location';
import SunRiseSvg from '../svgs/SunRise';
import moment from 'moment';
import axios from 'axios';

const {height, width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const [presentDate, setPresentDate] = useState('');
  const [prayerData, setPrayerData] = useState({});
  const [prayerTimes, setPrayerTimes] = useState({});
  // const [prayerData, setPrayerData] = useState({});

  useEffect(() => {
    let date = moment(new Date()).format('DD-MM-YYYY');
    setPresentDate(date);
    const url =
      'https://api.aladhan.com/v1/timings/28-02-2023?latitude=51.508515&longitude=-0.1254872&method=2';
    axios
      .get(url)
      .then(response => {
        console.log(response.data.data.timings);
        setPrayerTimes(response.data.data.timings);
        setPrayerData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const getCurrentData = data => {
    return <Text style={styles.text}>{data}</Text>;
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
                {/* <Text style={styles.text}>{readable ? readable : null}</Text> */}
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
                  <Text style={styles.text}>০৬ঃ২৩</Text>
                </View>
                <View>
                  <Text style={styles.text}>সূর্যাস্ত</Text>
                  <Text style={styles.text}>০৬ঃ২৩</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <HomeBottom prayerTimes={prayerTimes} />
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
    // backgroundColor: '#00FF7F',
    backgroundColor: '#233E8B',
  },
  bottomSection: {
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    backgroundColor: '#F5F5F5',
  },
  box: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
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
