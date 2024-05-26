import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { responsiveFontSizes } from '@material-ui/core'

export default function LoginScreen() {
  return (
    <View>
      <Image source={require('./../../../assets/images/logo.jpg')} 
        style={styles.logoImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    logoImage:{
      width:200,
      height:40,
      objectFit:"contain"
    }
})
