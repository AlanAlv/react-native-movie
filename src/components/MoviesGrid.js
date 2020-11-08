import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import axios from 'axios';


const MoviesGrid = () => {

    const [movies, setMovies] = useState('');
 
    useEffect(  () => {
        const callAPI = async () => {
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=b705275cbbfa9661ee41833d56b53b10';
            const result = await axios.get(url);
            setMovies(result.data.results);
            console.log(result.data.results);
            console.log(movies);
        }
        callAPI();
    }, []);

    return (  
        <>
            <View 
                style={styles.grid}
            >


                <View style={styles.gridItem}>
                    <Image 
                        style={styles.poster}
                        source={require('../../assets/img/movie2.jpg')}/>
                </View>
                <View style={styles.gridItem}>
                    <Image 
                        style={styles.poster}
                        source={require('../../assets/img/movie3.jpg')}/>
                </View>
                <View style={styles.gridItem}>
                    <Image 
                        style={styles.poster}
                        source={require('../../assets/img/movie4.jpg')}/>
                </View>

            </View>
            
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
    }
});
export default MoviesGrid;