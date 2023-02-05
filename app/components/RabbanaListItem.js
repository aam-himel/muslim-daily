import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RabbanaListItem = ({item}) => {
  const {id, arabic, spellingEng, englishTranslation, banglaTranslation} = item;
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{id}</Text>
      <Text style={styles.arabic}>{arabic}</Text>
      <Text style={styles.banglaTranslation}>{banglaTranslation}</Text>
      <Text style={styles.englishTranslation}>{englishTranslation}</Text>
    </View>
  );
};

export default RabbanaListItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  arabic: {
    textAlign: 'right',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 12,
    paddingLeft: 24,
  },
  englishTranslation: {
    color: 'black',
    fontSize: 16,
    paddingBottom: 12,
  },
  spellingEng: {
    color: 'black',
    fontSize: 14,
    paddingBottom: 12,
  },
  banglaTranslation: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 12,
  },
  number: {
    position: 'absolute',
    height: 40,
    width: 40,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'blue',
    borderTopLeftRadius: 10,
    padding: 4,
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  source: {},
});
