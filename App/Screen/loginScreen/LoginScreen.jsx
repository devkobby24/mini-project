import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors'


export default function LoginScreen() {
  return (
    <SafeAreaView style={{
      display:'flex',
      justifyContent: 'center',
      alignItems:'center',
    }}>
      <Image source={require('./../../../assets/images/logo1.png')} 
        style={styles.logoImage}
      />
      <Image source={require('./../../../assets/images/evc.png')}
        style={styles.loginbg}
      />
      <View style={{padding:20}}>
        <Text style={styles.heading}>Your Ultimate EV Charging station finder App</Text>
        <Text style={styles.desc}>Find EV charging stations near you, plan trips and so much more in just one click</Text>
          <View style={styles.button}>
              <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit',
                fontSize:17
              }}>Login With Google</Text>
          </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    logoImage:{
      width:200,
      height:40,
      objectFit:"contain"
    },
    loginbg:{
      width:"100%",
      height:150,
      objectFit:"cover",
      marginTop:0,
    },
    heading:{
      fontSize:25,
      fontFamily:'outfit-bold',
      textAlign:'center',
      marginTop:20
    },
    desc:{
      fontSize:20,
      fontFamily:'outfit-medium',
      textAlign:'center',
      marginTop:20,
      color:Colors.GRAY
    },
    button:{
      backgroundColor:Colors.PRIMARY,
      padding:16,
      display:'flex',
      borderRadius:99,
      marginTop:20,
    },

})
