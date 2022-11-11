import *as React from 'react'
import {Text,View,StyleSheet} from "react-native";
import{createBottomTabNavigator} from '@react-navigation/bottom-Tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from "../screens/Feed"
import Post from "../screens/Post"
import React,{componeets} from "react";
import {Text,View,StyleSheet} from "react-native";

export default class Feed extends Comment {
    renser() {
        return(<View>
            style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}
            <Text>Profile</Text>
        </View>)
    }
}












