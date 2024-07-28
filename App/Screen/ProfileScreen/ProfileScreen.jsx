import { View, Text, Image,StyleSheet } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { useUser } from '@clerk/clerk-expo';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {

  const {user}=useUser();
  const userName= user.fullName;
  const userEmail = user.primaryEmailAddress.emailAddress
  
  return (
    
    <View>
      <Text
        style={{
          padding: 10,
          fontFamily: "outfit-medium",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        My <Text style={{ color: Colors.PRIMARY }}>Profile</Text>
      </Text>
      <View style={{
          padding: 10,
          alignItems:'center',
          }}>
            <Image source={{uri:user?.imageUrl}}
        style={styles.userImage}      
      />
      </View>
      <View style={styles.container}>
          <Entypo name="user" size={24} color="black" />
          <Text style={styles.uName}>{userName}</Text>
      </View>    
      <View style={styles.container}>
          <MaterialIcons name="attach-email" size={24} color="black" />
          <Text style={styles.uEmail}>{userEmail}</Text>
      </View>
      
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  userImage:{
      width:250,
      height:250,
      borderRadius:100
  },
  uName:{
    fontFamily:'outfit-medium',
    fontSize:30,
    padding:10
  },
  uEmail:{
    fontFamily:'outfit-medium',
    fontSize:15,
    padding:10,
    textDecorationLine:"underline",
    textDecorationColor:Colors.BLACK
  },
  container:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',       
}
})
