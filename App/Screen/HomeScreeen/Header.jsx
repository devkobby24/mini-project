import { View, Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function Header() {
    const {user}=useUser();
  return (
    <View style={styles.container}>
      <Image source={{uri:user?.imageUrl}}
        style={styles.userImage}      
      />
      
      {/* <Image source={require('../../../assets/images/logo1.png')} 
        style={styles.logo}
      /> */}
      <Text
        style={{
          padding: 10,
          fontFamily: "outfit-medium",
          fontSize: 30,
          textAlign: "center"
        }}
      >
        Plug<Text style={{ color: Colors.PRIMARY }}>Point</Text>
      </Text>
      <FontAwesome name="filter" size={26} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        width:200,
        height:45,
        objectFit:'contain',
    },
    userImage:{
        width:45,
        height:45,
        borderRadius:99
    },
    container:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',       
    }


})