import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const TasbihScreen = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setCurrentCount(0);
  }, []);

  const handlePress = () => {
    if (currentCount === 33) {
      setTotalCount(currentCount + totalCount);
      setCurrentCount(0);
    } else {
      setCurrentCount(currentCount + 1);
    }
    console.log(currentCount);
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.counterText}> {currentCount} / 33</Text>
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>Count Tajbih</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TasbihScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#22c55e',
  },
  card: {
    height: '80%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    height: 80,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 20,
    elevation: 1,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
});
