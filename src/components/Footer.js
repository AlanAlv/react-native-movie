import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Footer = ({updateLanguage}) => {
    return (  
        <View style={styles.container}>
            <View style={styles.grid}>
            <TouchableHighlight 
                style={styles.gridItem}
                onPress={() => updateLanguage('')}    
            >
                <Text style={styles.label}>English</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.grid}
                onPress={() => updateLanguage('&language=es')}
            >
                <Text style={styles.label}>Spanish</Text>
            </TouchableHighlight>
            </View>

        </View>
    );


}

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#5E5E5E',
        height: 30,
        
    },
    label: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    grid:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flex:1
    },
    gridItem: {
        flexBasis: '49%'
    },
});
 
export default Footer;