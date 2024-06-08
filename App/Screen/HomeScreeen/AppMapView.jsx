import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function AppMapView() {

    const {location,setLocation} = useContext(UserLocationContext);   
  return location?.latitude&&(
    <View>
      <MapView style={styles.map}
      provider={PROVIDER_DEFAULT}
      showsUserLocation={true}
      region={{
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta:0.0422,
        longitudeDelta:0.0421
      }} 
      >
        <Marker 
          coordinate={{
            latitude: location?.latitude,
          }}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%',
      },
});