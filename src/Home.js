import { StyleSheet, Text, View,ScrollView, TouchableOpacity} from 'react-native'
import React,{useEffect} from 'react'
import DiscoverMovies from './Components/DiscoverMovies'
import Styles from './Styles'
import TrendingPeople from './Components/TrendingPeople'
import TrendingMovies from './Components/TrendingMovies'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import daftar from './Components/Daftar'

const Home = props => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <ScrollView style={Styles.sectionBg}>
      <DiscoverMovies/>
      <TrendingPeople title="Trending People" url="/trending/person/week" />
      <TrendingMovies
        title="Trending Movies"
        url="/movie/top_rated"
        navigation={props.navigation}
      />
      <TouchableOpacity>
      <Text style={{position:'absolute',marginLeft:335,marginTop:-347,color:'black'}}>
        See all
      </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Home