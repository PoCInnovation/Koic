import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stream from './components/Stream'
import Recap from './components/Recap'
import About from './components/About'

const Tab = createBottomTabNavigator();

function NavTab() {
  return (
      <View style={{width: "100%", height: "100pt"}}>
        <NavigationContainer >
          <Tab.Navigator>
            <Tab.Screen name="Stream" component={Stream} />
            <Tab.Screen name="Recap" component={Recap} />
            <Tab.Screen name="About" component={About} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View>
        <NavTab />
      </View>
    );
  }
}