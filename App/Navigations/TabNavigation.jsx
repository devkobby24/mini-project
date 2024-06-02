import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreeen/HomeScreen';
import FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen';
import ProfileScrren from '../Screen/ProfileScreen/ProfileScrren';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
        <Tab.Screen name='home'
        component={HomeScreen} 
        options={{
            tabBarLabel: 'Home',
            tabBarActiveTintColor:Colors.PRIMARY,
            tabBarIcon: ({color}) => (
                <AntDesign name="home" size={24} color={color}  />
            )
        }}
        />
        <Tab.Screen name='favorite'
        component={FavoriteScreen}
        options={{
            tabBarLabel: 'Favorite ',
            tabBarActiveTintColor:Colors.PRIMARY,
            tabBarIcon: ({color}) => (
                <MaterialIcons name="favorite" size={24} color={color} />
            )
        }}
         />
        <Tab.Screen name='profile'
        component={ProfileScrren}
        options={{
            tabBarLabel: 'Profile',
            tabBarActiveTintColor:Colors.PRIMARY,
            tabBarIcon: ({color}) => (
                <Feather name="user" size={24} color={color} />
            )
        }} />
    </Tab.Navigator>
  )
}