import React, { useState } from "react";
import { View, useWindowDimensions, StyleSheet, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Accordian from "./accordian";

export default function Help({ navigation }) {
  const [selectedId, setSelectedId] = useState("1");

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'FAQ' },
    { key: 'second', title: 'Contact Us' },
  ]);

  const [accordionData, setAccordionData] = useState(accordion_data);

  const accordion_data = [
    {
        title: '1',
        data: 'General',
    },
    {
        title: '2',
        data: 'General',
    },
    {
        title: '3',
        data: 'General',
    },
    {
        title: '4',
        data: 'General',
    },
  ];


  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#FCFCFC' }}>
        <FlatList
            style={{ flexGrow: 0, marginTop: 10 }}
            horizontal
            data={button_list}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item.id}/>

        <View style={{ 
            borderRadius: 10, 
            width: '100%', 
            height: 50, 
            flexDirection: 'row', 
            backgroundColor:'#F5F5F5',
            alignItems: 'center',
            marginTop: 20
            }}>

          <Image 
              style={{ 
                width: 20,
                height: 20,
                marginLeft: 20,
                resizeMode: 'contain' }}
              source={require('./ic_search.png')} />

          <TextInput
            style={{height: 40, marginLeft: 10}}
            placeholder="Search"
            />

            <Image 
                style={{ 
                position: 'absolute',
                right: 0,
                width: 20,
                height: 20,
                marginRight: 20,
                resizeMode: 'contain' }}
                source={require('./ic_category.png')} />

        </View>

        <Accordian 
            title = "What is mova ?"
            data = "Lorem ipsum, utawa ringkesé lipsum, iku tèks standar sing dipasang kanggo nuduhaké èlemèn grafis utawa presentasi visual kaya font, tipografi, lan tata letak."/>

        <Accordian 
            title = "How to remove wishlist"
            data = "Lorem ipsum, utawa ringkesé lipsum, iku tèks standar sing dipasang kanggo nuduhaké èlemèn grafis utawa presentasi visual kaya font, tipografi, lan tata letak."/>

        <Accordian 
            title = "How do i subscribe to premium ?"
            data = "Lorem ipsum, utawa ringkesé lipsum, iku tèks standar sing dipasang kanggo nuduhaké èlemèn grafis utawa presentasi visual kaya font, tipografi, lan tata letak."/>

        <Accordian 
            title = "How do i can download movies?"
            data = "Lorem ipsum, utawa ringkesé lipsum, iku tèks standar sing dipasang kanggo nuduhaké èlemèn grafis utawa presentasi visual kaya font, tipografi, lan tata letak."/>

        <Accordian 
            title = "How to unsubscribe from premium ?"
            data = "Lorem ipsum, utawa ringkesé lipsum, iku tèks standar sing dipasang kanggo nuduhaké èlemèn grafis utawa presentasi visual kaya font, tipografi, lan tata letak."/>



    </View>
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>AIMAR</Text>
      <Accordian 
            title = "Email"
            data = "Movie@stream.com"/>
             <Accordian 
            title = "Contact To Movie"
            data = "+62 777-888"/>

    </View>
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const button_list = [
    {
        id: '1',
        title: 'General',
    },
    {
        id: '2',
        title: 'Account',
    },
    {
        id: '3',
        title: 'Service',
    },
    {
        id: '4',
        title: 'Video',
    },
  ];

  const Item = ({ title, onPress, textColor, backgroundColor }) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonList, backgroundColor]}>
        <Text style={[styles.buttonText, textColor]}>{title}</Text>
    </TouchableOpacity>
  );
  
  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? 'white' : 'red';
    const backgroundColor = item.id === selectedId ? 'red' : 'white';
  
    return(
        <Item title={item.title}
            onPress={() => setSelectedId(item.id)}
            textColor={{ color }}
            backgroundColor={{ backgroundColor }}
            />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FCFCFC' }}>
        <View style={{ flex: 1, marginLeft: 15, marginRight: 15 }}>
            <TabView
                style={{  
                    elevation: 1,
                    shadowOpacity: 1
                }}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => <TabBar {...props} 
                style={{backgroundColor: '#FFF'}}
                indicatorStyle={{ backgroundColor: 'red' }}
                activeColor={'red'}
                inactiveColor={'black'}
                labelStyle={{ color: '#000' }}/>
            }/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonList: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginRight: 5,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#ff0000',
    borderRadius: 20,
    borderColor: '#ff0000',
    borderWidth: 1
  },
});