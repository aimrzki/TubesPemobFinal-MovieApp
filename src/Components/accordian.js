import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <View style={styles.container} elevation={1}>
            <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>    
                </View>
            }
            
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        marginTop: 10, 
        borderRadius: 10, 
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5
        },
       shadowRadius: 5,
       shadowOpacity: 1.0 
    },
    title:{
        fontSize: 14,
        fontWeight:'bold',
        // color: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        // backgroundColor: Colors.CGRAY,
    },
    parentHr:{
        height:1,
        // color: Colors.WHITE,
        width:'100%'
    },
    child:{
        // backgroundColor: Colors.LIGHTGRAY,
        // padding:16,
        marginTop: 0,
        marginHorizontal: 25,
        marginBottom: 10
    }
    
});