import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView
} from 'react-native';



const MovieDetails = () => {
    return ( 
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Kimetsu no Yaiba</Text>
            </View>
            <View style={styles.grid}>
                <View style={styles.gridItem}>
                    <Image 
                        style={styles.poster}
                        source={{uri: `https://image.tmdb.org/t/p/w185/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg`}}
                    />
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.label}>1999</Text>
                    <Text style={styles.label}>9.4</Text>
                    <Text style={styles.label}>120 mins</Text>
                </View>
            </View>
            <View>
                <Text style={styles.synopsis}>Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!</Text>

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
        backgroundColor: '#139c7c',
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
        height: 200
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