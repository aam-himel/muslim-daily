import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DailyDuas = () => {
  return (
    <View style={styles.container}>
      <Text>DailyDuas</Text>
    </View>
  )
}

export default DailyDuas

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F6F4FE',
        marginHorizontal: 24,
        marginTop: 24,
      },
})