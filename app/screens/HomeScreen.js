import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <>
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <Text style={styles.categoryTitle}>
            Main Adhkar (গুরুত্বপূর্ণ দুয়া সমূহ){' '}
          </Text>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Text style={styles.duaTitle}>ঘুমাতে যাওয়ার দোয়া</Text>
              <Text style={styles.dua}>
                اَللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا
              </Text>
              <Text style={styles.textItalic}>
                উচ্চারণ- আল্লাহুম্মা বিসমিকা আমুতু ওয়া আহইয়া।
              </Text>
              <Text style={styles.textBold}>
                অর্থ : ‘হে আল্লাহ! আপনারই নামে মরে যাই আবার আপনারই নামে জীবন লাভ
                করি।’
              </Text>
              <Text>
                O Allah (SWT), with Your name, do I die and live. (Tirmidhi,
                Vol. 2, Pg. 178)
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  duaTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  dua: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  textItalic: {
    fontStyle: 'italic',
  },
  textBold: {
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  cardContainer: {
    paddingHorizontal: 16,
  },
  card: {
    width: 300,
    padding: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    elevation: 4,
  },
});
