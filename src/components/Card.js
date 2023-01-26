import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import featuredIcon from '../images/featuredicon.png'

const Card = ({width,height, round, title, icon, ...props},) => {
  return (
    <View style={[{ width: width, height: height, borderRadius: round, ...props },styles.cotnainer,]}>
      <Text style={styles.cardTitle}>{ title }</Text>
      <Text style={styles.cardText}>Some of the importants duas for everyday.</Text>
      <View style={styles.cardIcon}>
        <Image source={featuredIcon} />
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cotnainer: {
        backgroundColor: '#714AE8',
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    cardText: {
        fontSize: 16,
        marginTop: 12,
        color: '#FFFFFF',
        maxWidth: "70%"
    },
    cardIcon: {
        position: 'absolute',
        top: "40%",
        right: '10%',

    }
})