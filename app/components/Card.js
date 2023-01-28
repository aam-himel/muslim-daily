import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import featuredIcon from '../images/featuredicon.png'

const renderCardText = (content) => {
  if(content > 0){
    return  <Text style={styles.cardText}>{content}</Text>
  }
  return(
    <Text style={styles.cardText}>{content}</Text>
  )
}

const Card = ({width,height, round, title, icon, ...props},) => {
  const {content} = props;
  return (
    <View style={[{ width: width, height: height, borderRadius: round, ...props },styles.cotnainer,]}>
      <Text style={styles.cardTitle}>{ title }</Text>
      {renderCardText(content)}
      {icon == false ? null : <View style={styles.cardIcon}>
        <Image source={featuredIcon} />
      </View>}
      
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
    },
    cardIcon: {
        position: 'absolute',
        top: "40%",
        right: '8%',

    }
})