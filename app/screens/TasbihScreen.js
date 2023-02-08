import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const TasbihScreen = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const HALF_SEC = 500;

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
    Vibration.vibrate(0.5 * HALF_SEC);
    console.log(currentCount);
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.counterText}> {currentCount} / 33 </Text>
        <TouchableOpacity style={styles.edit}>
          <MaterialIcon name="edit" color="white" size={28} />
        </TouchableOpacity>
        <Text style={styles.total}>Total</Text>
      </View>

      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>Count Tajbih</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Icon name="restart" color="white" size={28} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon2}>
        <Icon name="vibrate" color="white" size={28} />
      </TouchableOpacity>
    </View>
  );
};

export default TasbihScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  card: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    paddingTop: '20%',
  },
  counterText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#eab308',
  },
  button: {
    height: 200,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#374151',
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#eab308',
  },
  total: {
    fontSize: 24,
    paddingTop: 30,
  },
  edit: {
    position: 'relative',
    top: 0,
  },
  icon: {
    position: 'absolute',
    bottom: '5%',
    left: '10%',
  },
  icon2: {
    position: 'absolute',
    bottom: '5%',
    right: '10%',
  },
});
