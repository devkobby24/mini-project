import { View, Text, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import GlobalApi from '../../Utils/GlobalApi'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { getFirestore } from "firebase/firestore";
import { app } from '../../Utils/FirebaseConfig';
import { doc, setDoc } from "firebase/firestore";

export default function PlaceItem({place}) {

  const PLACE_PHOTO_BASE_URL="https://places.googleapis.com/v1/"

  const db = getFirestore(app);
  const onSetFav=async()=>{
    await setDoc(doc(db, "ev-fav-place", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });
  }

  return (
    <View
        style={{width:Dimensions.get('screen').width*0.9,
            backgroundColor:Colors.WHITE,
            margin:5,
            borderRadius:10}}
    >
      <LinearGradient 
        colors={['transparent','#ffffff','#ffffff']} 
      >
        <Pressable style={{position:'absolute',right:0,margin:5}} onPress={()=>onSetFav()}>
          <Ionicons name="heart-outline" size={30} color="white" />
        </Pressable>
      <Image source={
        place?.photos?
        {uri:PLACE_PHOTO_BASE_URL+place?.photos[0]?.name+
        "media?key="+ GlobalApi.API_KEY+"&maxHeightPx=800&maxWidthPx=1200"}
        :require('./../../../assets/images/Station.jpg')} 
        style={{width:'100%',
                borderRadius:10,
                height:150,
                zIndex:-1}}
      />
      <View style={{padding:5}}>
    <Text style={{
        color:Colors.BLACK,
        fontSize:23,
        fontFamily:'outfit-medium'
    }}>{place.displayName?.text}</Text>
    <Text style={{
      color:Colors.GRAY,
      fontFamily: 'outfit'
    }}>{place.shortFormattedAddress}</Text>

      <View style={{
        marginTop:5,
      }}>
        <Text style={{
          fontFamily:'outfit',
          color:Colors.GRAY,
          fontSize:17
        }}>Connectors</Text>
        <Text style={{
          fontFamily:'outfit-medium',
          fontSize:20,
          marginTop:2
        }}>{place.evChargeOptions?.connectorCount} Points</Text>
        <View style={{
          padding:12,
          backgroundColor:Colors.PRIMARY,
          borderRadius:6,
          // paddingHorizontal:14,
          marginLeft: '85%'
        }}> 
          <FontAwesome6 name="location-arrow" size={25} color="white" />
        </View>
      </View>
      </View>
      </LinearGradient>
    </View>
  )
}