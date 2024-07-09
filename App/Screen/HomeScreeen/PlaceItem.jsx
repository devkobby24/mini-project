import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

export default function PlaceItem({place}) {
  return (
    <View
        style={{width:Dimensions.get('screen').width*0.9}}
    >
      <Image source={require('./../../../assets/images/logo.jpg')} 
        style={{width:'100%',borderRadius:10,height:130}}
      />
    </View>
  )
}