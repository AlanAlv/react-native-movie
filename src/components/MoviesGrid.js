import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';


const MoviesGrid = ({navigation}) => {

    const [movies, setMovies] = useState('');
 
    useEffect(  () => {
        const callAPI = async () => {
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=b705275cbbfa9661ee41833d56b53b10';
            const result = await axios.get(url);

            setMovies(result.data.results);

        }
        callAPI();
    }, []);

    const imageBaseUrl = `https://image.tmdb.org/t/p/`;
    const imageSize = `w185`;

    displayDetails= (movie) => {
        navigation.navigate('Movie_Details', movie);
    }
    return (  
        <>
            <ScrollView>

                <View 
                    style={styles.grid}
                >
                    {

                    movies.length > 0 ? (
                        movies.map(movie => (

                            <TouchableHighlight 
                                onPress={() => displayDetails(movie)}
                                key={movie.id} 
                                style={styles.gridItem}
                            >

                                <Image 
                                    style={styles.poster}
                                    source={{uri: `${imageBaseUrl}${imageSize}${movie.poster_path}`}}/>
                            </TouchableHighlight>
                        ))
                    ):
                        <ActivityIndicator style={styles.spinner} size="large" color="#222222"/> 
                    }
                </View>
            </ScrollView>
            
        </>
    );
}
 
const styles = StyleSheet.create({
    grid:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flex:1
    },
    gridItem: {
        flexBasis: '50%'
    },
    poster: {
        width: '100%',
        height: 200,
    },
    spinner: {
        marginTop: 50,
        alignItems: 'center',
        flex:1
    }
});
export default MoviesGrid;