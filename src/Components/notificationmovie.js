import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground, Image, TextInput, StatusBar } from 'react-native';
import axios from 'axios';

export default function Notifmovie({ navigation }) {
  const [movie, setFilmData] = useState([]);
  const [originalFilter, setOriginalFilter] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    axios.get('http://api.themoviedb.org/3/movie/now_playing?api_key=3267b032645fe5841f6f37bd75e06e25&language=en-US&page=1')
    .then(function (response) {
      setFilmData(response.data.results)
      setOriginalFilter(response.data.results)
    })
    .catch(function (error) {
      
    })
    .then(function (error) {
      
    });
  }, []);

  const Item = ({ item }) => (
    <TouchableOpacity onPress={() =>
      navigation.push('DetailMovie', {
        data: item
      })}>
      <View style={[styles.flatListItemContainer]}>
        <ImageBackground source={{uri: "https://image.tmdb.org/t/p/w500/"+item.backdrop_path}}
              style={[styles.flatListItemImage]} >
        </ImageBackground>
        <View style={{ marginLeft: 10 }}>
            <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 14, fontWeight: '900', color: '#000' }}>{item.original_title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  
  const renderItem = ({ item }) => {
    return(
        <Item item={item}/>
    );
  }


  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
    
      </View>
      <FlatList
          contentContainerStyle={{ paddingBottom: 60 }}
          style={{ flexGrow: 0, marginTop: 15}}
          data={movie}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',     
  },
  flatListItemContainer: {
    marginVertical: 8, 
    flexDirection: 'row', 
    alignItems: "center",
    marginLeft: 15,
  },
  flatListItemImage: {
    width: 165, 
    height: 120, 
    borderRadius: 10, 
    overflow: "hidden", 
    resizeMode: 'contain'
  },
  flatListItemRatingContainer: {
    backgroundColor: '#CF302E', 
    width: 35, 
    height: 25, 
    marginTop: 10,
    marginLeft: 10, 
    borderRadius: 4, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  flatListItemTitle: {
    backgroundColor: '#CF302E', 
    width: 35, 
    height: 25, 
    marginTop: 10,
    marginLeft: 10, 
    borderRadius: 4, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  flatListItemRatingText: {
    margin: 5, 
    fontSize: 10, 
    color: '#FFF'
  },
  searchViewContainer: {
    borderRadius: 10, 
    width: '80%', 
    height: 50, 
    flexDirection: 'row', 
    backgroundColor:'#f6dfdf',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'red'
  },
  filterCategoryContainer: {
    width: 40,
    height: 45,
    marginRight: 10,
    marginTop: 22,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6dfdf',
    borderRadius: 12,
    overflow: 'hidden',
  },
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