import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from '../../Utils/Colors';

export default function SearchBar({searchedLocation}) {
  return (
    <View style={styles.searchbar}>
      <GooglePlacesAutocomplete
      placeholder='Search EV Charging Station'
      fetchDetails={true}
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        //console.log(data, details);
        searchedLocation(details?.geometry?.location)
      }}
      query={{
        key: 'AIzaSyDGAs9NQQD_LzlJ88zSYWDyWMwQXkOMo8M',
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
    }
})