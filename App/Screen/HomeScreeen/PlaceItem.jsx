import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function PlaceItem({place}) {
  return (
    <View
        style={{width:Dimensions.get('screen').width*0.9,
            backgroundColor:Colors.WHITE,
            margin:5,
            borderRadius:10}}
    >
      <Image source={require('./../../../assets/images/logo.jpg')} 
        style={{width:'100%',borderRadius:10,height:130}}
      />
      <View style={{padding:15}}>
    <Text style={{
        color:Colors.BLACK,
        fontSize:23,
        fontFamily:'outfit-medium'
    }}>{place.displayName?.text}</Text>
    <Text style={{
      color:Colors.GRAY,
      fontFamily: 'outfit'
    }}>{place?.shortFormattedAddress}</Text>

      <View style={{
        marginTop:5,
      }}>
        <Text style={{
          fontFamily:'outfit',
          color:Colors.GRAY
        }}>Connectors</Text>
        <Text>{place.evChargeOptions?.connectorCount}</Text>
      </View>
      </View>
    </View>
  )
}