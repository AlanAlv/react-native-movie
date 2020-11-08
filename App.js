import 'react-native-gesture-handler';
import React from 'react';
import {
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesGrid from './src/components/MoviesGrid';
import MovieDetails from './src/components/MovieDetails';

const Stack = createStackNavigator();
const App = () => {
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
          name="Movies"
          component={MoviesGrid}
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

export default App;
