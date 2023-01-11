import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Awal({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"white" }}>
         <Image 
          source={require('./Logo.png')} 
          style={{width: 250, height: 200, marginBottom:10, marginTop:20}}
          />
          <Text style = {{fontSize:30, fontWeight:'bold',color:'black', marginTop:10, marginBottom:10}}>
            Let's You In
          </Text>
          <View style={{flex: 1,justifyContent:'space-evenly',marginBottom:50,marginLeft:20,marginRight:20}}>
        <TouchableOpacity onPress={() => navigation.navigate('Facebook')} 
        style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:50,paddingVertical:15}}>
            <Image
            source={require('./facebook.png')}
            style={{width: 30, height: 30, marginRight:150}}
            />
            <Text style = {{fontSize:18,color:'grey',fontWeight:'bold', marginLeft:50,marginTop:-29, justifyContent:'center'}}>
            Login With Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Google')}
        style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:50,paddingVertical:15}}>
            <Image
            source={require('./google.png')}
            style={{width: 30, height: 30, marginRight:50}}
            />
            <Text style = {{fontSize:18,color:'grey',fontWeight:'bold', marginLeft:55,marginTop:-29, justifyContent:'center'}}>
            Login With Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Apple')}
        style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:50,paddingVertical:15}}>
            <Image
            source={require('./apple.png')}
            style={{width: 30, height: 40}}
            />
            <Text style = {{fontSize:18,color:'grey',fontWeight:'bold', marginLeft:60,marginTop:-35, justifyContent:'center'}}>
            Login With Apple
          </Text>
        </TouchableOpacity>
        <Text style = {{fontSize:15,color:'grey',fontWeight:'bold', marginLeft:150}}>
            Or
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}
        style={{borderColor:'#ddd',borderWidth:2,borderRadius:30,paddingHorizontal:50,paddingVertical:15}}>
            <Text style = {{fontSize:18,color:'grey',fontWeight:'bold', marginLeft:30, justifyContent:'center'}}>
            Login With Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('login')} >
          <Text style={{fontSize:15,fontWeight:'bold', color:'grey',justifyContent:'center', marginLeft:130 }}>
            Sign In
          </Text> 
          </TouchableOpacity>
        </View>
        </View>
      );
    };

    export default Awal;