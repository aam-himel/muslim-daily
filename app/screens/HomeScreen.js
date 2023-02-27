import React from 'react';
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

const {height, width} = Dimensions.get('screen');
const HomeScreen = ({navigation}) => {
  const cardText = 'A collection of powerful duas starting with rabbana.';
  const cardTextAsmaulHusna = 'Al-Asma-ul-Husna ( اَلاسْمَاءُ الْحُسناى )';
  const cardTextDuasDaily = 'Some of the importants duas for everyday.';

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
                <Text style={styles.text}>12, February,৮ ফাল্গুন </Text>
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
            <HomeBottom />
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
