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
import PrayerTime from '../components/PrayerTime';

const {height, width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url =
    'https://api.aladhan.com/v1/timings/28-02-2023?latitude=51.508515&longitude=-0.1254872&method=2';
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setData(result.data);
    };
    fetchData();
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const {code, status, data: apiData} = data;
  const {timings} = apiData;

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
            <Text style={styles.sectionTitle}>নামাজের সময় সূচী</Text>

            {Object.entries(timings).map(([key, value]) => (
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
    // backgroundColor: '#00FF7F',
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
