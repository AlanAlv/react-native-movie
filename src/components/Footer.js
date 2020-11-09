import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {LanguageContext} from '../context/LanguageContext';


const Footer = ({updateLanguage}) => {
    const [language, setLanguage] =useContext(LanguageContext);

    const updateLngES = () => {
        updateLanguage();
        setLanguage('&language=es');
        console.log(language);
    }

    const updateLngEN = () => {
        updateLanguage();
        setLanguage('');
        console.log(language);
    }

    return (  
        <View style={styles.container}>
            <View style={styles.grid}>
                <TouchableHighlight 
                    style={styles.gridItem}
                    onPress={() => updateLngEN() }    
                >
                    <Text style={styles.label}>English</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    style={styles.gridItem}
                    onPress={() => updateLngES()}
                >
                    <Text style={styles.label}>Español</Text>
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
        flexBasis: '80%'
    },
});
 
export default Footer;