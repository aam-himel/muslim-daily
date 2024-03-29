import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';
import RabbanaListItem from '../components/RabbanaListItem';
import rabbanaDuas from '../data/rabbanaDuas';
const renderItem = ({item}) => {
  return <RabbanaListItem item={item} />;
};

const DuaRabbana = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>40 Rabbana Duas </Text>
            <Text style={styles.subTitle}>QURANIC Duas</Text>
          </View>
          <View>
            <FlatList
              data={rabbanaDuas}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DuaRabbana;

const styles = StyleSheet.create({
  top: {
    height: 100,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  contaier: {
    flex: 1,
    backgroundColor: '#8B6BEC',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    color: 'black',

    fontWeight: 'normal',
    marginBottom: 16,
    textAlign: 'center',
  },
  scrolldown: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
