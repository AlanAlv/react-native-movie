import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView
} from 'react-native';



const MovieDetails = ({route}) => {
    const {title, vote_average, release_date, overview, poster_path } = route.params;

    const imageBaseUrl = `https://image.tmdb.org/t/p/`;
    const imageSize = `w185`;
    return ( 
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.grid}>
                <View style={styles.gridItem}>
                    <Image 
                        style={styles.poster}
                        source={{uri: `${imageBaseUrl}${imageSize}${poster_path}`}}
                    />
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.label}>Rating: {vote_average}</Text>
                    <Text style={styles.label}>{release_date}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.synopsis}>{overview}</Text>

            </View>
        </ScrollView>
             );
}

const styles=StyleSheet.create({
    grid:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flex:1
    },
    gridItem: {
        flexBasis: '50%'
    },
    header: {
        backgroundColor: '#31453f',
        paddingHorizontal: 20,
        paddingVertical: 50,
        marginBottom: 10
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 40
    }, 
    poster: {
        width: '100%',
        height: 250,
        marginLeft: 10
    },
    label: {
        color: '#5E5E5E',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    synopsis: {
        color: '#8aa19a',
        fontSize: 15,
        paddingHorizontal: 20,
        paddingVertical: 15
    }
});
export default MovieDetails;