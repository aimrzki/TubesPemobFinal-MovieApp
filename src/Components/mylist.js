import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground, Image, TextInput, StatusBar } from 'react-native';
import axios from 'axios';


export default function MyList({ navigation }) {
  const [movie, setFilmData] = useState([]);
  const [selectedId, setSelectedId] = useState(2);

  useEffect(() => {
    getMovieData()
  }, []);

  const getMovieData = async () => {
    axios.get('http://api.themoviedb.org/3/movie/now_playing?api_key=3267b032645fe5841f6f37bd75e06e25&language=en-US&page=1')
    .then(function (response) {
      setFilmData(response.data.results)
    })
    .catch(function (error) {
    })
    .then(function (error) {
    });
  };

  const button_list = [
    {
        id: 1,
        title: 'All Categories',
    },
    {
        id: 2,
        title: 'Movie',
    },
    {
        id: 3,
        title: 'Tv Series',
    },
    {
        id: 4,
        title: 'Child',
    },
  ];

  const Item = ({ item }) => (
    <TouchableOpacity 
      onPress={() =>
      navigation.push('DetailMovie', {
        data: item
      })}>
      <View style={[styles.flatListItemContainer]}>
        <ImageBackground source={{uri: "https://image.tmdb.org/t/p/w500/"+item.backdrop_path}}
              style={[styles.flatListItemImage]} >
          <View style={[styles.flatListItemRatingContainer]}>
            <Text style={[styles.flatListItemRatingText]}>{item.vote_average}</Text>
          </View>
        </ImageBackground>
      </View>

    </TouchableOpacity>
  );

  const ItemCategory = ({ title, onPress, textColor, backgroundColor }) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonList, backgroundColor]}>
        <Text style={[styles.buttonText, textColor]}>{title}</Text>
    </TouchableOpacity>
  );
  
  const renderItem = ({ item }) => {
    return(
        <Item item={item}/>
    );
  }

  const setId = () => {
      console.log("press")
  }

  const renderItemCategory = ({ item }) => {
    const color = item.id === selectedId ? 'white' : 'red';
    const backgroundColor = item.id === selectedId ? 'red' : 'white';
    console.log(selectedId)
  
    return(
        <ItemCategory title={item.title}
            onPress={() => setSelectedId(item.id)}
            textColor={{ color }}
            backgroundColor={{ backgroundColor }}/>
    );
  }

  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={{ width: '100%', flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center', marginTop: 20 }}>
      </View>
      <FlatList
          key={'category'}
          style={{ flexGrow: 0, marginTop: 0, height: 70 }}
          horizontal
          data={button_list}
          renderItem={renderItemCategory}
          keyExtractor={item1 => item1.id}/>
      
      <FlatList
          key={'_'}
          numColumns={2}
          style={{ flexGrow: 1, marginTop: 1 }}
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
    alignItems: 'center'
  },
  flatListItemContainer: {
    flex: 1,
    marginVertical: 8, 
    marginRight: 10, 
    marginHorizontal: 10,
    paddingTop: 10,
  },
  flatListItemImage: {
    width: 180, 
    height: 230, 
    borderRadius: 10, 
    overflow: "hidden", 
    resizeMode: 'cover'
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
    backgroundColor:'#F5F5F5',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15
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
  buttonText: {
    fontSize: 15
  }
});