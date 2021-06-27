import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import raven_activity from '../Activity/raven_activity'
import boar_activity from '../Activity/boar_activity'
import stream from './Stream'
import global_activity from '../Activity/global_activity'
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../utils/graph'
import { style } from '../utils/style'

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

function NavTabAcitivty() {
    return (
        <View style={style.global}>
          <Header text='Activity'/>
          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
              showIcon: true,
              activeTintColor: 'white',
              inactiveTintColor: 'red',
              indicatorStyle: {
                  height: null,
                  top: '15%',
                  bottom: '20%',
                  width: '45%',
                  left: '2.5%',
                  borderRadius: 100,
              },
              style: {
                  alignSelf: "center",
                  width: '50%',
                  bottom: '80%',
                  borderRadius: 100,
                  backgroundColor: "white",
                  elevation: 5,
                  shadowOpacity: .10,
                  shadowColor: "#000",
                  shadowOffset: {
                      width: 0,
                      height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
              },
              tabStyle: {
                  borderRadius: 100,
              },
            }}>
          <Tab.Screen
              name="corbeau"
              component={raven_activity}
              options={{
              tabBarLabel: 'Graph_corbeau',
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('../../icons/raven.png')}
                    resizeMode="contain"
                    style={{
                      bottom: '30%',
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#6c53f8' : 'black',
                    }}
                  />
                </View>
               ),
              }} />
            <Tab.Screen
              name="sanglier"
              component={boar_activity}
              options={{
              tabBarLabel: 'Graph_sanglier',
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('../../icons/boar.png')}
                    resizeMode="contain"
                    style={{
                      bottom: '30%',
                      width: 30,
                      height: 30,
                      tintColor: focused ? '#6c53f8' : 'black',
                    }}
                  />
                </View>
               ),
              }} />
            <Tab.Screen
              name="Graph"
              component={global_activity}
              options={{
              tabBarLabel: 'Graph',
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('../../icons/all.png')}
                    resizeMode="contain"
                    style={{
                      bottom: '30%',
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#6c53f8' : 'black',
                    }}
                  />
                </View>
               ),
              }} />
          </Tab.Navigator>
        </View>
    )
}

export default class Recap extends React.Component {
    render() {
        return (
          <View>
            <NavTabAcitivty />
          </View>
        );
    }
}

// const style = StyleSheet.create({
//     headerBar: {
//       marginTop: '10%',
//       width: '100%',
//       alignItems: 'flex-end',
//       paddingHorizontal: '10%',
//       borderBottomLeftRadius: 20,
//       borderBottomRightRadius: 20,
//       paddingHorizontal: 20,
//     },
//     header: {
//       width: '100%',
//       height: 100,
//     },
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       width : wWidth,
//       height : wHeight,
//     },
//     global: {
//       width: wWidth, 
//       height: wHeight,
//       flex: 1,
//       justifyContent: 'center',
//       resizeMode: 'contain',
//       position: 'absolute',
//       // alignItems: 'center',
//       // flexDirection: 'column',
//       // backgroundColor: '#1b212c'
//     },
// })