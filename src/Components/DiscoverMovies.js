import { StyleSheet, Text, View} from 'react-native';
import React, {useEffect,useState} from 'react';
import { GET } from '../Services/API';
import { IMAGE_POSTER_URL } from '../config';
import { SliderBox } from 'react-native-image-slider-box';
import Constants from '../Constans';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const DiscoverMovies = () => {
    const[movies,setMovies] = useState([]);
    const [images,setImages] = useState([]);
    useEffect(()=>{
        const getMovies =  async () => {
            const response = await GET ('/discover/movie');
            setMovies(response.results);

           const images = response.results.map((data)=> 
           `${IMAGE_POSTER_URL}${data.backdrop_path}`);

           let backImages = [];
           for(let i=0;i<10;++i){
            backImages = [...backImages,images[i]]
           }
           setImages(backImages);
        }
        getMovies();
    },[]);
  return (
    <View>
        <SliderBox images={images} sliderBoxHeight={300} dotColor={Constants.secondaryColor}/>
    </View>
  )
}

export default DiscoverMovies

const styles = StyleSheet.create({})