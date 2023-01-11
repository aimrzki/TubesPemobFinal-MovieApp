import { View, Text,Image,StyleSheet,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'

const Profil = ({navigation}) => {
  return (
    <ScrollView style={styles.utama}>
      <TouchableOpacity
         onPress={()=>navigation.navigate("EditProfil")}
         >
      <Image source={require('./profil.png')}
         style={styles.fotoprofil} />
         </TouchableOpacity>
         <Text style={styles.namaprofil}>
          Aimar Rizki
         </Text>
         <Text style={styles.email}>
          aimrzki@student.telkomuniversity.ac.id
         </Text>
         <TouchableOpacity
         onPress={()=>navigation.navigate("Edit Profil")}
         >
         <Image source={require('./premium.png')}
         style={styles.premium} />
         </TouchableOpacity>
         <View>
         <TouchableOpacity
         onPress={()=>navigation.navigate("Edit Profil")}
         >
         <Image source={require('./iprofil.png')}
         style={styles.icon} />
         <Text style={styles.fontp}>
          Edit Profil
         </Text>
         <Image source={require('./select.png')}
         style={styles.select} />
         </TouchableOpacity>
         </View>
         <View>
         <TouchableOpacity
         onPress={()=>navigation.navigate("Notification")}
         >
         <Image source={require('./inotif.png')}
         style={styles.icon} />
         <Text style={styles.fontp}>
          Notification
         </Text>
         <Image source={require('./select.png')}
         style={styles.select} />
         </TouchableOpacity>
         </View>
         <View>
         <TouchableOpacity
         onPress={()=>navigation.navigate("Security")}
         >
         <Image source={require('./isecurity.png')}
         style={styles.icon} />
         <Text style={styles.fontp}>
          Security
         </Text>
         <Image source={require('./select.png')}
         style={styles.select} />
         </TouchableOpacity>
         </View>
         <View>
         <TouchableOpacity
         onPress={()=>navigation.navigate("Language")}
         >
         <Image source={require('./ilanguage.png')}
         style={styles.icon} />
         <Text style={styles.fontp}>
          Language
         </Text>
         <Image source={require('./select.png')}
         style={styles.select} />
         </TouchableOpacity>
         </View>
         <View>
         <TouchableOpacity
         onPress={()=>navigation.navigate("Help")}
         >
         <Image source={require('./ihelp.png')}
         style={styles.icon} />
         <Text style={styles.fontp}>
          Help Center
         </Text>
         <Image source={require('./select.png')}
         style={styles.select} />
         </TouchableOpacity>
         </View>
         <View>
         <TouchableOpacity
         onPress={()=>navigation.navigate("Privacy Policy")}
         >
         <Image source={require('./ihelp.png')}
         style={styles.icon} />
         <Text style={styles.fontp}>
          Privacy Policy
         </Text>
         <Image source={require('./select.png')}
         style={styles.select} />
         </TouchableOpacity>
         </View>
         <View>
         <TouchableOpacity
         onPress={()=>navigation.navigate("Share")}
         >
         <Image source={require('./share.png')}
         style={styles.icon} />
         <Text style={styles.fontp}>
          Share Application To Friend
         </Text>
         <Image source={require('./select.png')}
         style={styles.select} />
         </TouchableOpacity>
         </View>
         <TouchableOpacity 
        onPress={()=>navigation.navigate("awal")}
        style={{
            backgroundColor:'red',
            paddingVertical:10,
            width:300,
            justifyContent:'center',
            alignItems:'center',
            marginTop:30,
            marginLeft:45,
            borderRadius:20,
            borderWidth: 1,
            borderColor: '#fff'
            }}>
            
            <Text style={{color:'white',fontWeight:'bold'}}>Logout</Text>
        </TouchableOpacity>
         <View style={{marginTop:50}}>

         </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  utama:{
    backgroundColor:'white'
  },
  fotoprofil:{
    width: 250, 
    height: 200,
    marginLeft:60,
    marginTop:30,
  },
  namaprofil:{
    color:'black',
    fontWeight:'bold',
    alignItems:'center',
    marginLeft:125,
    fontSize:23,
  },
  email:{
    color:'black',
    marginLeft:57,
    marginTop:10,
    fontSize:15,
  },
  premium:{
    width: 385, 
    height: 95,
    marginLeft:10,
    marginTop:30,
  },
  icon:{
    width: 29, 
    height: 24,
    marginLeft:20,
    marginTop:22,
  },
  fontp:{
    color:'black',
    fontSize:15,
    position:'absolute',
    fontWeight:'bold',
    marginTop:22,
    marginLeft:70,
  },
  select:{
    position:'absolute',
    width:19,
    height:20,
    marginTop:21,
    marginLeft:360,
  },
})


export default Profil