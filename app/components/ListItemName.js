import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListItemName = ({item}) => {
  const {id, arabic, english, englishTranslation, bangla, banglaTranslation} =
    item;
  return (
    <View style={styles.listContainer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.number}>{id}</Text>
        </View>
        <View>
          <Text style={styles.english}>{english}</Text>
          <Text style={styles.englishTranslation}>{englishTranslation}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.arabic}>{arabic}</Text>
          <Text style={styles.banglaTranslation}>{banglaTranslation}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItemName;

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: 'center',
    height: 100,
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 10,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 34,
    height: 34,
    borderRadius: 4,
    backgroundColor: '#714AE8',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginRight: 12,
  },

  english: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    maxWidth: 120,
  },
  englishTranslation: {
    fontSize: 14,
    color: '#000',
    maxWidth: 150,
  },
  arabic: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
  },
  banglaTranslation: {
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
  },
  right: {
    flex: 1,
    flexDirection: 'column',
  },
  trancate: {
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
  },
});
