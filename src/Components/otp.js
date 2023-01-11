import React, { useRef, useState } from "react"
import { View,Text,TextInput,StyleSheet,TouchableOpacity} from "react-native"

const Otp = ({navigation}) => {
  const pin1Ref=useRef(null)
  const pin2Ref=useRef(null)
  const pin3Ref=useRef(null)
  const pin4Ref=useRef(null)

  const[pin1,setPin1]=useState("")
  const[pin2,setPin2]=useState("")
  const[pin3,setPin3]=useState("")
  const[pin4,setPin4]=useState("")
  return (
    <View style={{backgroundColor:'white'}}>

      <Text style={{marginLeft:60,marginTop:120,color:'black'}}>
        Code has been send to +62 851*****9322
      </Text>

      <View style={{borderBottomWidth:1,
    width:50,
    justifyContent:'center',
    alignItems:'center',position:"absolute",marginTop:160,marginLeft:30}}>
        <TextInput
        ref={pin1Ref}
        keyboardType="number-pad"
        maxLength={1}
        onChange={(pin1)=>{
          setPin1(pin1)
          if(pin1!=""){
            pin2Ref.current.focus()
          }
        }}
        style={styles.TextInputText}
        />
      </View>
      <View style={{borderBottomWidth:1,
    width:50,
    justifyContent:'center',
    alignItems:'center',marginLeft:120,position:"absolute",marginTop:160}}>
        <TextInput
        ref={pin2Ref}
        keyboardType="number-pad"
        maxLength={1}
        onChange={(pin2)=>{
          setPin2(pin2)
          if(pin2!=""){
            pin3Ref.current.focus()
          }
        }}
        style={styles.TextInputText}
        />
      </View>
      <View style={{borderBottomWidth:1,
    width:50,
    justifyContent:'center',
    alignItems:'center',marginLeft:215,position:"absolute",marginTop:160}}>
        <TextInput
        ref={pin3Ref}
        keyboardType="number-pad"
        maxLength={1}
        onChange={(pin3)=>{
          setPin3(pin3)
          if(pin3!=""){
            pin4Ref.current.focus()
          }
        }}
        style={styles.TextInputText}
        />
      </View>
      <View style={{borderBottomWidth:1,
    width:50,
    justifyContent:'center',
    alignItems:'center',marginLeft:310,position:"absolute",marginTop:160}}>
        <TextInput
        ref={pin4Ref}
        keyboardType="number-pad"
        maxLength={1}
        onChange={(pin4)=>{
          setPin4(pin4)
        }}
        style={styles.TextInputText}
        />
      </View>
      <Text style={{marginLeft:127,marginTop:140,color:'black'}}>
        Resend Code in 
      </Text>
      <Text style={{marginLeft:230,color:'red',position:"absolute",marginTop:280}}>
        60
      </Text>
      <Text style={{marginLeft:250,color:'black',position:"absolute",marginTop:280}}>
        s
      </Text>
      <TouchableOpacity 
        onPress={()=>navigation.navigate("Home")}
        style={{
            backgroundColor:'red',
            paddingVertical:10,
            width:300,
            justifyContent:'center',
            alignItems:'center',
            marginTop:70,
            marginLeft:45,
            borderRadius:20,
            borderWidth: 1,
            borderColor: '#fff'
            }}>
            
            <Text style={{color:'white',fontWeight:'bold'}}>Verify</Text>
        </TouchableOpacity>
        <View style={{marginTop:500}}>
        </View>
    </View>
  )
}


export default Otp

const styles = StyleSheet.create({
  TextInputView:{
    borderBottomWidth:1,
    width:50,
    justifyContent:'center',
    alignItems:'center'
  },
  TextInputText:{
    fontSize:30
  }
})