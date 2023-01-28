import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListItemName = ({item}) => {
  const {arabic, english, englishTranslation, bangla, banglaTranslation} = item;
  return (
    <View style={styles.listContainer}>
      <View style={styles.container}>
        <View>
          <Text>1</Text>
        </View>
        <View>
          <Text>{english}</Text>
          <Text>{englishTranslation}</Text>
        </View>
        <View>
          <Text>{bangla}</Text>
          <Text>{banglaTranslation}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItemName;

const styles = StyleSheet.create({
  listContainer: {
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
  arabic: {},
  english: {},
  englishTranslation: {},
  bangla: {},
  banglaTranslation: {},
});
