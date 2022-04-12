import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {AppRoutes} from "./components/Navigation";
import { AuthenticationNavigator } from './Auth';
import { HomeNavigator } from './Home';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'}/>
      <AppStack.Navigator headerMode={'none'} initialRouteName={'Authentication'}>
        <AppStack.Screen name={'Authentication'} component={AuthenticationNavigator}/>
        <AppStack.Screen name={'Home'} component={HomeNavigator}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
