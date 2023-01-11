import React from 'react';
 import {useState,useEffect} from 'react';
 import {View, Text, TouchableOpacity, Image} from 'react-native';
 import  Modal  from 'react-native-modal';

 const PopUp = ({navigation})  => {
    const [modal,setModal] = useState(true);
    return(
        <View style={{flex:1}}>
            <Modal isVisible={modal}>
                <View
                    style={{
                        backgroundColor: '#FFFFFF',
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        borderRadius: 6,
                    }}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'flex-end'}}
                            onPress={() => setModal(false)}>
                            <Text style={{color:'#272727', fontSize:18}}>X</Text>
                        </TouchableOpacity>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image
                            source={require('./congrats.jpg')}
                            style={{width: 100, height: 150}}
                        />
                        <Text style={{fontWeight:'bold',marginTop:20,fontSize:16, color:'#272727'}}>Your account is ready to use. 
                        You will be redirected to the Home page in a few seconds.</Text>
                        </View>
                    </View>
            </Modal>
        </View>
    );
 };

 export default PopUp;