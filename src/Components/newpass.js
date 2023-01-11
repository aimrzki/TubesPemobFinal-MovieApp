import * as React from 'react';
import { useState} from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';

const CreatePass =({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
      <View style={{ flex: 1, backgroundColor: "white"}}>
        <View style={{alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('./newpassword.jpg')}
            style={{width: 200, height: 200, marginTop: 70}}
            />
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: 15, marginBottom: 55}}>Create Your New Password</Text>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 1, marginBottom: 7}}>
          <View 
            style={{
              justifyContent: 'center', 
              alignItems: 'center', 
              backgroundColor: 'grey',
              width: 50,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              elevation: 1, 
            }}>
            <Icon name="lock" size={20} color="#bdbdbd" />
          </View> 
          <TextInput 
            value={email} 
            style={{
              backgroundColor: 'grey', 
              //marginHorizontal: 20, 
              //borderRadius: 15,
              flex: 1,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              elevation: 1, 
          }}
            placeholder="Masukkan password baru"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 1, marginBottom: 10}}>
          <View 
            style={{
              justifyContent: 'center', 
              alignItems: 'center', 
              backgroundColor: 'grey',
              width: 50,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              elevation: 1, 
            }}>
            <Icon name="lock" size={20} color="#bdbdbd" />
          </View> 
          <TextInput 
            value={password} 
            style={{
              backgroundColor: 'grey', 
              //marginHorizontal: 20, 
              //borderRadius: 15,
              flex: 1,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              elevation: 1, 
          }}
            placeholder="Konfirmasi Password"
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            marginTop: 10,
            marginHorizontal: 20,
            borderRadius: 15,
            elevation: 2,
          }}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate('PopUp')}/>
          </TouchableOpacity>
          </View>
     );
  }


export default CreatePass;