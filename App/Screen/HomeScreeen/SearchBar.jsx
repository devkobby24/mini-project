import { StyleSheet,View } from 'react-native';
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
      onPress={(data, details ) => {
         console.log(data, details);   
        searchedLocation(details?.geometry?.location);
      }}
      query={{  
        key: 'AIzaSyCI40Dykp4gz6YdD_lJv9phvgAuS4wFQdo',
        language: 'en'  
      }}
                 
    />
    </View> 
  );
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
});