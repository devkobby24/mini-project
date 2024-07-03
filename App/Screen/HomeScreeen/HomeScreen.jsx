import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import SearchBar from './SearchBar'
import { UserLocationContext } from '../../Context/UserLocationContext'
import GlobalApi from '../../Utils/GlobalApi'

export default function HomeScreen() { 

  const {location,setLocation}=useContext(UserLocationContext);

  const GetNearByPlace=()=>{
    const data={
      "includedTypes": ['electric_vehicle_charging_station'],
      "maxResultCount": 10,
      "locationRestriction": {
      "circle": {
      "center": {
        "latitude": location?.latitude,
        "longitude": location?.longitude
      },
      "radius": 500.0
      }
    }
  }
    GlobalApi.NewNearByPlace(data).then(resp=>{
      console.log(resp.data);
    })
  }

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location)=>console.log(location)}/>
      </View>
      <AppMapView />
    </SafeAreaView>
  )
}   

const styles = StyleSheet.create({
  headerContainer:{
    position: 'absolute',
    zIndex:10,
    padding:10,
    width:'100%',
    paddingHorizontal:20
  }
})