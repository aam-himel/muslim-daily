import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AlermSvg from '../svgs/AlermSvg';

const SahriIftarTime = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iftarCard}>
        <Text>আজকের ইফতার</Text>
        <Text style={styles.time}>06:20</Text>
        <AlermSvg />
      </View>
      <View style={styles.sehriCard}>
        <Text>আজকের ইফতার</Text>
        <Text style={styles.time}>06:30</Text>
        <AlermSvg />
      </View>
    </View>
  );
};

export default SahriIftarTime;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    columnGap: 12,
    flexDirection: 'row',
    marginTop: 30,
  },
  iftarCard: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  sehriCard: {
    flex: 0.5,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  time: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00FF7F',
  },
});
