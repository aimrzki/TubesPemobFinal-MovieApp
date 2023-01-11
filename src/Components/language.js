import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton } from 'react-native-paper';

const Language = () => {
  const [checked, setChecked] = React.useState('Apple'); 
  return (
    
    <View style = {{}}>
      <View>
      <Text style = {{fontSize:20, color:'black',fontWeight:'bold',marginRight:300, marginTop:10, marginBottom:40,marginLeft:10}}>
        Sugest
      </Text>
        <Text style = {{fontSize:20,fontWeight:'bold',marginRight:270,marginTop:-20,marginLeft:20}}>
        Indonesia
        </Text>
        </View>
      <View style={{alignItems:'flex-end', marginTop:-26}}>
      <RadioButton 
        value="Indonesia" 
        status={ checked === 'Indonesia' ? 'checked' : 'unchecked' } 
        onPress={() => setChecked('Indonesia')} 
      />
      </View>
      <Text style = {{fontSize:20,fontWeight:'bold',marginRight:300,marginLeft:20}}>
        English
      </Text>
      <View style={{alignItems:'flex-end', marginTop:-26}}>
      <RadioButton
        value="English"
        status={ checked === 'English' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('English')}
      />
      </View>
      <Text style = {{fontSize:20,fontWeight:'bold',color: 'black',marginRight:280,marginTop:10,marginLeft:10}}>
        Language
        </Text>
      <Text style = {{fontSize:20,fontWeight:'bold',marginRight:320,marginTop:20,marginLeft:20}}>
        Jawa
      </Text>
      <View style={{alignItems:'flex-end', marginTop:-26}}>
        <RadioButton
        value="jawa"
        status={ checked === 'jawa' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('jawa')}
      />
      </View>
      <Text style = {{fontSize:20,fontWeight:'bold',marginRight:340,marginLeft:20}}>
        US</Text>
      <View style={{alignItems:'flex-end', marginTop:-26}}>
      <RadioButton
        value="US"
        status={ checked === 'US' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('US')}
      />
      </View>
      <Text style = {{fontSize:20,fontWeight:'bold',marginRight:340, marginRight:20,marginLeft:20}}>
        Japanese</Text>
        <View style={{alignItems:'flex-end', marginTop:-26}}>
      <RadioButton
        value="Japanese"
        status={ checked === 'Japanese' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Japanese')}
      />
      </View>
      <Text style = {{fontSize:20,fontWeight:'bold',marginRight:295,marginLeft:20}}>
        Chinese</Text>
        <View style={{alignItems:'flex-end', marginTop:-26}}>
      <RadioButton
        value="Chinese"
        status={ checked === 'Chinese' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Chinese')}
      />
      </View>
      <Text style = {{fontSize:20,fontWeight:'bold',marginRight:295,marginLeft:20}}>
        Spanish</Text>
      <View style={{alignItems:'flex-end', marginTop:-26}}>
      <RadioButton
        value="Spanish"
        status={ checked === 'Spanish' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Spanish')}
      />
      </View>
    
    </View>
  );
};
export default Language;