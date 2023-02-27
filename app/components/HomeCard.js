import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const HomeCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.featuredBox}>
        <Text>Hello</Text>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryBox}>
          <View style={styles.inner}>
            <Text>Card 1</Text>
          </View>
        </View>
        <View style={styles.categoryBox}>
          <View style={styles.inner}>
            <Text>Card 1</Text>
          </View>
        </View>
        <View style={styles.categoryBox}>
          <View style={styles.inner}>
            <Text>Card 1</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    width,
    height: height / 1.8,
    backgroundColor: 'blue',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  featuredBox: {
    height: '25%',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
  categoryContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryBox: {
    height: '50%',
    width: '50%',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
