import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions,
  Text
} from 'react-native';
import axios from 'axios';
import MovieDetails from './MovieDetails';


const MoviesGrid = ({navigation}) => {

    const [movies, setMovies] = useState('');
    const [orientation, setOrientation] = useState("PORTRAIT");


 
    useEffect(  () => {

        Dimensions.addEventListener('change', ({window:{width,height}})=>{
            if (width<height) {
              setOrientation("PORTRAIT")
            } else {
              setOrientation("LANDSCAPE")
            }
        });


        const callAPI = async () => {
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=b705275cbbfa9661ee41833d56b53b10';
            const result = await axios.get(url)
            .catch(function (error) {
                if (error.response) {
                   // Request made and server responded
                    createAlert(error.response.data.status_message);
                    console.log(error.response);

                } else if (error.request) {
                    // The request was made but no response was received
                    createAlert(error.request)
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    createAlert(error.message)
                    console.log('Error', error.message);
                }
            
              });

            setMovies(result.data.results);
            

        }
        callAPI();

    }, []);

    const imageBaseUrl = `https://image.tmdb.org/t/p/`;
    const imageSize = `w185`;

    displayDetails= (movie) => {
        navigation.navigate('Movie_Details', movie);
    }

    const createAlert = error =>
        Alert.alert(
        "There was an error",
        error,
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
    );

        if(orientation === 'PORTRAIT'){
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
        else{
            return(
                <ScrollView>
        
                <View 
                    style={styles.grid}
                >
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
                    <View style={styles.gridItem}>
                        <MovieDetails route={{params: movies[0]}}/>
                    </View>
                </View>
            </ScrollView>
            )
        }
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
    gridItemLandscape: {
        flexBasis: '50%'
    },
    poster: {
        width: '100%',
        height: 250,
    },
    spinner: {
        marginTop: 50,
        alignItems: 'center',
        flex:1
    }
});
export default MoviesGrid;