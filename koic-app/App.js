import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button, StatusBar, Dimensions } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stream from './components/Stream'
import Recap from './components/Recap'
import About from './components/About'
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

function NavTab() {
  return (
      <View style={{width: wWidth, height: wHeight}}>
        <NavigationContainer >
          <Tab.Navigator 
          tabBarOptions={{ 
            showIcon: true 
            }}>
            <Tab.Screen name="Stream" component={Stream} options={{
              tabBarLabel: 'Stream',
              tabBarIcon: () => <Icon name="camera" color="#333" size={24} />,
            }} />
            <Tab.Screen name="Recap" component={Recap} options={{
              tabBarLabel: 'Recap',
              tabBarIcon: () => <Icon name="bars" color="#333" size={24} />,
            }} />
            <Tab.Screen name="About" component={About} options={{
              tabBarLabel: 'About',
              tabBarIcon: () => <Icon name="question" color="#333" size={24} />,
            }}/>
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