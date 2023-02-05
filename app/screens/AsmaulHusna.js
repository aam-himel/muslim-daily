import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Lottie from 'lottie-react-native';

import asmaulHusna from '../data/asmaulHusna';
import ListItemName from '../components/ListItemName';

const AsmaulHusna = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerTitleAlign: 'center',
      headerTransparent: true,
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
    <>
      <ScrollView style={styles.contaier}>
        <View style={styles.top}>
          <Text style={styles.title}>Allah’s 99 names. </Text>
          <Text style={styles.subTitle}>
            Al-Asma-ul-Husna ( اَلاسْمَاءُ الْحُسناى )
          </Text>
          <View style={styles.scrolldown}>
            <Lottie
              style={{
                width: 24,
                color: 'white',
              }}
              source={require('../lotties/scrold.json')}
              autoPlay
              loop
            />
          </View>
        </View>
        <View>
          <FlatList
            data={asmaulHusna}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default AsmaulHusna;

const styles = StyleSheet.create({
  top: {
    height: 180,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#8B6BEC',
  },
  contaier: {
    flex: 1,
    backgroundColor: '#8B6BEC',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    color: '#fff',

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
