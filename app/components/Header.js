import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
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

  return <></>;
};

export default Header;

const styles = StyleSheet.create({});
