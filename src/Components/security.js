import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Security({ navigation }) {

    const [isEnabled4, setIsEnabled4] = useState(false);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

    const [isEnabled5, setIsEnabled5] = useState(false);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);

    const [isEnabled6, setIsEnabled6] = useState(false);
    const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);

    const character = ">"

return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#181A1F' }}>
        <Text style={styles.textStyleHeader}>Control</Text>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>General Notification</Text>
            <Text style={styles.rightArrow}>{character}</Text>
            
        </View>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>New Arrival</Text>
            <Text style={styles.rightArrow}>{character}</Text>
        </View>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>New Services Available</Text>
            <Text style={styles.rightArrow}>{character}</Text>
        </View>

        <Text style={[styles.textStyleHeader, {marginTop: 13}]}>Security</Text>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>Remember me</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#db0000" }}
                thumbColor={isEnabled4 ? "#FFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch4}
                value={isEnabled4}/>
        </View>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>Face ID</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#db0000" }}
                thumbColor={isEnabled5 ? "#FFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch5}
                value={isEnabled5}/>
        </View>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>Biometric ID</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#db0000" }}
                thumbColor={isEnabled6 ? "#FFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch6}
                value={isEnabled6}/>
        </View>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>Google Authenticator</Text>
            <Text style={[styles.rightArrow, {color: 'white'}]}>{character}</Text>
        </View>

        <View style={{marginTop: 10}}>
            <TouchableOpacity
                    style={styles.button}
                    underlayColor='#fff'>
                    <Text style={styles.buttonText}>Change PIN</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginTop: 10}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate("CreatePass")}
                    style={styles.button}
                    underlayColor='#fff'>
                    <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    button: {
        marginTop: 100,
        width: '90%',
        height: 55,
        marginTop: 10,
        backgroundColor: '#282930',
        borderRadius: 40,
        borderColor: '#fff',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
      },

      buttonText: {
        color: '#fff',
        fontFamily: "notoserif",
        fontWeight: '700',
      },
    rightArrow: {
        color: '#fff',
        fontFamily: "notoserif",
        fontWeight: '500',
        marginRight: 10,
        fontSize: 18        
      },
    textStyleHeader: {
        color: '#fff',
        fontFamily: "notoserif",
        fontWeight: '900',
        marginLeft: 15,
        fontSize: 15,
        marginTop:15,
      },
    switchContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 14
      },
      textStyle: {
        color: '#fff',
        fontFamily: "notoserif",
        fontWeight: '600',
        fontSize: 13
        
      }
  });