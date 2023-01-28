import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import asmaulHusna from '../data/asmaulHusna';
import ListItemName from '../components/ListItemName';

const AsmaulHusna = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);
  const renderItem = ({item}) => {
    return <ListItemName item={item} />;
  };

  return (
    <ScrollView style={styles.contaier}>
      <Text style={styles.title}>Allah’s 99 names. </Text>
      <Text style={styles.subTitle}>
        Al-Asma-ul-Husna ( اَلاسْمَاءُ الْحُسناى )
      </Text>
      <View>
        <FlatList
          data={asmaulHusna}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

export default AsmaulHusna;

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    marginTop: 70,
    backgroundColor: '#F6F4FE',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 16,
  },
});
