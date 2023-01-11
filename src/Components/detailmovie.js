import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground, Image, TextInput, StatusBar } from 'react-native';
import axios from 'axios';


export default function DetailMovie({ route, navigation }) {
  
  const { data } = route.params;

  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Image style={{ width: '100%', height: 180, resizeMode: 'cover' }} source={{uri: "https://image.tmdb.org/t/p/w500/"+data.backdrop_path}}></Image>
      <Text style={{ marginHorizontal: 10, marginTop: 10, fontSize: 18, fontWeight: '800', color: '#000' }}>{data.original_title}</Text>
      <Text style={{ marginHorizontal: 10, marginTop: 10 }}>{data.overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',  
  }
});