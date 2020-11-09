import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';
import {
  Button,
  View,
  Alert
} from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesGrid from './src/components/MoviesGrid';
import MovieDetails from './src/components/MovieDetails';
import {LanguageContext, LanguageProvider} from './src/context/LanguageContext';

const Stack = createStackNavigator();
const App = () => {

  const [searchQuery, setSearchQuery] = useState('Popular');
  const [alertMessage, setAlertMessage] = useState('Top-Rating');
  const [language, setLanguage] =useContext(LanguageContext);


  const changeQueryStates = () => {
    if(searchQuery === 'Popular'){
      setSearchQuery('Top-Rating');
      setAlertMessage('Popular');
    }
    else {
      setSearchQuery('Popular');
      setAlertMessage('Top-Rating');
    }

  }
  const createAlert = ()  =>
    Alert.alert(
      language === '&language=es' ? "Clasificación de peliculas": "Movie Classification ",
      language === '&language=es' ? `¿Cambiar orden a ${alertMessage}?`: `Change order to ${alertMessage}?`,
    [
        {
        text: "No",
        onPress: () => console.log(language),
        style: "cancel"
        },
        { text: language === '&language=es' ? "Sí":"Yes", onPress: () => changeQueryStates() }
    ],
    { cancelable: false }
  );

  return (
    <NavigationContainer>    
      <Stack.Navigator
        initialRouteName="Movies"
        screenOptions={{
          headerStyle:{
            backgroundColor: '#222222'
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen 
          name={language === '&language=es' ? `Películas ${searchQuery}` : `${searchQuery} Movies`}
          component={MoviesGrid}
          initialParams={{searchQuery}}
          screenProps={language}
          options={{
            headerRight: () => (
              <View style={{marginRight:10}} >
              <Button
                onPress={() => createAlert()}
                title="⋮"
                color="#31453f"
                marginRight="10"
                
              />
              </View>
            ),
          }}
        />
        <Stack.Screen 
          name="Movie_Details"
          component={MovieDetails}
          options={({route}) => ({
            title: route.params.title
          })}
        />
      </Stack.Navigator>

    </NavigationContainer>

    
)};

export default () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  )
};
