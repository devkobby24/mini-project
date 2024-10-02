import { View, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import MapView, { Marker, PROVIDER_DEFAULT,} from 'react-native-maps';
import { UserLocationContext } from '../../Context/UserLocationContext';
import MapViewStyle from '../../Utils/MapViewStyle.json'
import Markers from './Markers';

export default function AppMapView({placeList}) {

    const {location,setLocation} = useContext(UserLocationContext);   
   return location?.latitude&& ( 
    <View>
      <MapView style={styles.map}
      provider={PROVIDER_DEFAULT}
      customMapStyle={MapViewStyle}
      // showsUserLocation={true}
      region={{
        latitude: 5.6311,
        longitude: -0.1609,
        latitudeDelta:0.0522,
        longitudeDelta:0.0421
      }} 
      >
        {location? <Marker 
          coordinate={{
            latitude: location?.latitude,
            longitude: location?.longitude
          }}
        >
        </Marker> :null}

        {placeList&&placeList.map((item, index)=>(
          <Markers key={index}
          index={index}
          place={item} />
        ))}
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