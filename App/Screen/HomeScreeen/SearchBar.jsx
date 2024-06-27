import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({searchedLocation}) {
  return (
    <View style={styles.searchbar}>
        <Ionicons name="location-sharp" size={24} color={Colors.GRAY} style={{paddingTop:10}}/>
      <GooglePlacesAutocomplete
      placeholder='Search EV Charging Station'
      fetchDetails={true}
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        
        searchedLocation(details?.geometry?.location)
      }}
      query={{
        //key: 'AIzaSyDGAs9NQQD_LzlJ88zSYWDyWMwQXkOMo8M',
        key: 'AIzaSyB9ctiAb-J9CZil_ZlpAg3ZOXpxwudHlNw',
        language: 'en',
      }}
    />
    </View>
  )
}  

const styles = StyleSheet.create({
    searchbar:{
        borderRadius:6,
        backgroundColor: Colors.WHITE,
        display:'flex',
        flexDirection:'row',
        marginTop:15,
        paddingHorizontal:5
    },
})