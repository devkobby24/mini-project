import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import SearchBar from './SearchBar'

export default function HomeScreen() {
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