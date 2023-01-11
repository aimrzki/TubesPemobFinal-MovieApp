import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from 'react-native';


export default function Notification({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    const [isEnabled4, setIsEnabled4] = useState(false);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

    const [isEnabled5, setIsEnabled5] = useState(false);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);

    const [isEnabled6, setIsEnabled6] = useState(false);
    const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);

return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#181A1F' }}>
        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>General Notification</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#db0000" }}
                thumbColor={isEnabled ? "#FFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}/>
        </View>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>New Arrival</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#db0000" }}
                thumbColor={isEnabled ? "#FFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}/>
        </View>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>New Services Available</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#db0000" }}
                thumbColor={isEnabled ? "#FFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch3}
                value={isEnabled3}/>
        </View>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>New Release Movie</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#db0000" }}
                thumbColor={isEnabled ? "#FFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch4}
                value={isEnabled4}/>
        </View>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>App Updates</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#db0000" }}
                thumbColor={isEnabled ? "#FFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch5}
                value={isEnabled5}/>
        </View>

        <View style={styles.switchContainer}>
            <Text style={styles.textStyle}>Subscription</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#db0000" }}
                thumbColor={isEnabled ? "#FFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch6}
                value={isEnabled6}/>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 14
      },
      textStyle: {
        color: '#fff',
        fontFamily: "notoserif",
        fontWeight: '900'
        
      }
  });