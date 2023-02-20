import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Header = ({ title }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text> {title} </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})