import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'


export default function LoginScreen() {
  return (
    <SafeAreaView>
      <Image source={require('./../../../assets/images/logo1.png')} 
        style={styles.logoImage}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    logoImage:{
      width:200,
      height:40,
      objectFit:"contain"
    }
})
