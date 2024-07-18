import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Marker } from 'react-native-maps'
import { SelectMarkerContext } from '../../Context/SelectMarkerContext'

export default function Markers({index, place}) {

  const {selectedMarker, setSelectedMarker}=useContext(SelectMarkerContext)
  return (
    <Marker 
    coordinate={{
      latitude: place.location?.latitude,
      longitude: place.location?.longitude
    }}

    onPress={()=>setSelectedMarker(index)}
  >

    <Image source={require('./../../../assets/images/marker.png')} 
      style={{width:60,height:60}}
    />
  </Marker> 
  )
}

const styles = StyleSheet.create({})