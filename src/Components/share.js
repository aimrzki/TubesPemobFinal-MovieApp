import React, { useRef } from "react";
import { View, Button, TouchableOpacity, StyleSheet, Image, Text, Linking, Modal } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";


export default function Share({ navigation }) {

    const refRBSheet = useRef();
  
    return (
      <View>
        <Image source={require('./back.png')}
         style={{height:668,width:400,marginTop:0}} />
         <Text style={{position:"absolute",fontSize:30,color:'white',marginTop:495,marginLeft:30,fontWeight:"bold"}}>
         Thank you for recommending us
         </Text>
         <Text style={{position:"absolute",fontSize:10,color:'white',marginTop:575,marginLeft:30}}>
         Copyright Movie @2023
         </Text>
      <Button title="Share App To Friend" onPress={() => refRBSheet.current.open()} />
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: "#55000000"
            },
            draggableIcon: {
              backgroundColor: "#D2D2CF"
            },
            container: {
              borderRadius: 20
            }
          }}>
  
          <View style={{ flexDirection: 'column'}}>
  
            <Text style={{ alignSelf: 'center', fontSize: 18, fontFamily: "notoserif",fontWeight: '700',}}>Send To</Text>
  
            <View style={{ width: '80%', height: 1, backgroundColor: '#D2D2CF', alignSelf: 'center', marginTop: 10 }}></View>
  
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25, marginTop: 20}}>
                <TouchableOpacity>
                  <View style={{ alignItems: 'center' }}>
                    <Image 
                          style={styles.iconSocialMedia}
                          source={require('./whatsapp.png')} />
  
                      <Text>Whatsapp</Text>
                  </View>
                </TouchableOpacity>
  
                <TouchableOpacity>
                  <View style={{ alignItems: 'center' }}>
                    <Image 
                          style={styles.iconSocialMedia}
                          source={require('./twitter.png')} />
  
                      <Text>Twitter</Text>
                  </View>
                </TouchableOpacity>
  
  
                <TouchableOpacity onPress={ ()=>{ Linking.openURL("https://www.facebook.com/profile.php?id=100012909991829")}}>
                  <View style={{ alignItems: 'center' }}>
                    <Image 
                          style={styles.iconSocialMedia}
                          source={require('./facebook.png')} />
  
                      <Text>Facebook</Text>
                  </View>
                </TouchableOpacity>
  
  
                <TouchableOpacity onPress={ ()=>{ Linking.openURL("https://www.instagram.com/didrxxn/?next=%2F")}}>
                  <View style={{ alignItems: 'center' }}>
                    <Image 
                          style={styles.iconSocialMedia}
                          source={require('./instagram.png')} />
  
                      <Text>Instagram</Text>
                  </View>
                </TouchableOpacity>
            </View>
  
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25, marginTop: 20}}>
                <TouchableOpacity>
                  <View style={{ alignItems: 'center' }}>
                    <Image 
                          style={styles.iconSocialMedia}
                          source={require('./yahoo.png')} />
  
                      <Text>Yahoo</Text>
                  </View>
                </TouchableOpacity>
  
                <TouchableOpacity>
                  <View style={{ alignItems: 'center' }}>
                    <Image 
                          style={styles.iconSocialMedia}
                          source={require('./chat.png')} />
  
                      <Text>Chat</Text>
                  </View>
                </TouchableOpacity>
  
  
                <TouchableOpacity>
                  <View style={{ alignItems: 'center' }}>
                    <Image 
                          style={styles.iconSocialMedia}
                          source={require('./wechat.jpeg')} />
  
                      <Text>WeChat</Text>
                  </View>
                </TouchableOpacity>
  
  
                <TouchableOpacity>
                  <View style={{ alignItems: 'center' }}>
                    <Image 
                          style={styles.iconSocialMedia}
                          source={require('./tiktok.png')} />
  
                      <Text>Tiktok</Text>
                  </View>
                </TouchableOpacity>
            </View>
  
          </View>
          
        </RBSheet>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    iconSocialMedia: {
      width: 50,
      height: 50,
      resizeMode: 'contain'
    }
  
  })