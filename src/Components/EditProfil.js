import { View, Text,ScrollView,TouchableOpacity,Image,StyleSheet,TextInput} from 'react-native'
import React from 'react'

const EditProfil = ({navigation}) => {
  return (
    <ScrollView style={styles.utama}>
        <Image source={require('./tabprofil.png')}
         style={{height:60,width:500,marginTop:25}} />
       <TouchableOpacity
         onPress={()=>navigation.navigate("Edit Profil")}
         >
      <Image source={require('./profil.png')}
         style={styles.fotoprofil} />
         </TouchableOpacity>
        <TextInput placeholder='Full Name' style={{
            backgroundColor:'#f8f8ff',
            width:'90%',
            borderColor:'e8e8e8',
            borderWidth:1,
            borderRadius:10,
            paddingHorizontal:10,
            marginVertical:30,
            marginLeft:20,
         }}></TextInput>
          <TextInput placeholder='Username' style={{
            backgroundColor:'#f8f8ff',
            width:'90%',
            borderColor:'e8e8e8',
            borderWidth:1,
            borderRadius:10,
            paddingHorizontal:10,
            marginTop:-10,
            marginLeft:20,
         }}></TextInput>
         <TextInput placeholder='Email' style={{
            backgroundColor:'#f8f8ff',
            width:'90%',
            borderColor:'e8e8e8',
            borderWidth:1,
            borderRadius:10,
            paddingHorizontal:10,
            marginTop:17,
            marginLeft:20,
         }}></TextInput>
         <TextInput placeholder='Phone Number' style={{
            backgroundColor:'#f8f8ff',
            width:'90%',
            borderColor:'e8e8e8',
            borderWidth:1,
            borderRadius:10,
            paddingHorizontal:10,
            marginTop:17,
            marginLeft:20,
         }}></TextInput>
         <TextInput placeholder='Male/Female' style={{
            backgroundColor:'#f8f8ff',
            width:'90%',
            borderColor:'e8e8e8',
            borderWidth:1,
            borderRadius:10,
            paddingHorizontal:10,
            marginTop:17,
            marginLeft:20,
         }}></TextInput>
         <TextInput placeholder='Region' style={{
            backgroundColor:'#f8f8ff',
            width:'90%',
            borderColor:'e8e8e8',
            borderWidth:1,
            borderRadius:10,
            paddingHorizontal:10,
            marginTop:17,
            marginLeft:20,
         }}></TextInput>
         <TouchableOpacity 
        onPress={()=>navigation.navigate("Profil")}
        style={{
            backgroundColor:'red',
            paddingVertical:13,
            width:300,
            justifyContent:'center',
            alignItems:'center',
            marginTop:40,
            marginLeft:45,
            borderRadius:25,
            borderWidth: 1,
            borderColor: '#fff'
            }}>
            
            <Text style={{color:'white',fontWeight:'bold'}}>Update</Text>
        </TouchableOpacity>
        <View style={{marginTop:50}}>
        </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  fotoprofil:{
    width: 260, 
    height: 200,
    marginLeft:60,
    marginTop:30,
  kolomprofil:{
    backgroundColor:'#f8f8ff',
    width:'90%',
    borderColor:'e8e8e8',
    borderWidth:1,
    borderRadius:10,
    paddingHorizontal:10,
    marginVertical:30,
    marginLeft:20,
  },
  },
  utama:{
    backgroundColor:'white'
  },
})
export default EditProfil