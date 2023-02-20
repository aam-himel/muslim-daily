import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Dimensions
} from 'react-native';

import Card from '../components/Card';
import Header from '../components/Header';
import HomeCard from '../components/HomeCard';

const { height, width } = Dimensions.get('screen');
const HomeScreen = ({ navigation }) => {
  const cardText = 'A collection of powerful duas starting with rabbana.';
  const cardTextAsmaulHusna = 'Al-Asma-ul-Husna ( اَلاسْمَاءُ الْحُسناى )';
  const cardTextDuasDaily = 'Some of the importants duas for everyday.';

  return (
    <>
      <Header title="Muslim Daily" />
      <SafeAreaView style={[styles.container]}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <HomeCard />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86efac'
  },
});


