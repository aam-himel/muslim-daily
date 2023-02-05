import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import Card from '../components/Card';

const notification = require('../images/notification.png');

const HomeScreen = ({navigation}) => {
  const cardText = 'A collection of powerful duas starting with rabbana.';
  const cardTextAsmaulHusna = 'Al-Asma-ul-Husna ( اَلاسْمَاءُ الْحُسناى )';
  const cardTextDuasDaily = 'Some of the importants duas for everyday.';
  const {colors} = useTheme();

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View>
            <Text style={styles.title}>Muslim </Text>
            <Text style={[{marginTop: -16}, styles.title]}>Daily. </Text>
          </View>
          <Lottie
            style={{
              width: 150,
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: -1,
            }}
            source={require('../lotties/bg.json')}
            autoPlay
            loop
          />
        </View>

        <View style={styles.gap}></View>
        {/* card section */}
        <View style={styles.cardFeatured}>
          <Pressable onPress={() => navigation.navigate('DailyDuas')}>
            <Card
              title={'Daily Duas.'}
              width={'100%'}
              height={152}
              round={20}
              content={cardTextDuasDaily}
            />
          </Pressable>
          <View
            style={{
              marginTop: 24,
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Pressable onPress={() => navigation.navigate('DuaRabbana')}>
              <Card
                title={'Dua Rabbana'}
                width={158}
                height={190}
                round={20}
                icon={false}
                content={cardText}
              />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('AsmaulHusna')}>
              <Card
                title={'Allah’s 99 names.'}
                width={158}
                height={224}
                round={20}
                icon={false}
                content={cardTextAsmaulHusna}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginTop: 12,
            }}>
            <Card
              title={'Daily Duas.'}
              width={158}
              height={224}
              round={20}
              marginTop={-24}
            />
            <Pressable onPress={() => navigation.navigate('Playground')}>
              <Card
                title={'Skia Playground'}
                width={158}
                height={190}
                round={20}
                icon={false}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: '#F6F4FE',
  },
  scroll: {flex: 1},
  hero: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#25282B',
  },
  gap: {
    marginVertical: 20,
  },
  cardFeatured: {
    flex: 1,
  },
  cardTitle: {},
  cardLarge: {},
  cardSmall: {},
});
