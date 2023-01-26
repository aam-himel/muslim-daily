import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Card from '../components/Card';

const notification = require('../images/notification.png');

const HomeScreen = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[{backgroundColor: colors.background}, styles.container]}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} >
        <View style={styles.hero}>
          <View>
            <Text style={styles.title}>Muslim </Text>
            <Text style={[{marginTop: -16}, styles.title]}>Daily. </Text>
          </View>
          <Image source={notification} />
        </View>

        <View style={styles.gap}></View>
        {/* card section */}
        <View style={styles.cardFeatured}>
          <Card title={'Daily Duas.'} width={'100%'} height={152} round={20} />
          <View style={{ marginTop: 24, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'  }}>
           <Card title={'Daily Duas.'} width={158} height={164} round={20} />
           <Card title={'Daily Duas.'} width={158} height={224} round={20} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'  }}>
           <Card title={'Daily Duas.'} width={158} height={224} round={20} marginTop={-24} />
           <Card title={'Daily Duas.'} width={158} height={164} round={20} />
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
    marginHorizontal: 24,
    marginTop: 24,
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
