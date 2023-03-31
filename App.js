import React from 'react';
import {Login, Recipe} from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { StatusBar, StyleSheet, Text, View} from "react-native";

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Home" component={Tabs} />
        <stack.Screen name="Recipe" component={Recipe} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


