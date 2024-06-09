import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function Header() {
    const {user}=useUser();
  return (
    <View>
      <Image source={{uri:user?.imageUrl}}
        style={{width:45,height:45,borderRadius:99}}      
      />
      
      <Image source={require('../../../assets/images/logo1.png')} 
        style={{width:200,height:45,objectFit:'contain'}}
      />
    </View>
  )
}