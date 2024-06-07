import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function AppMapView() {

    const {location,setLocation} = useContext(UserLocationContext);   
  return (
    <View>
      <MapView style={styles.map}
      provider={PROVIDER_DEFAULT}
      showsUserLocation={true} 
      />
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