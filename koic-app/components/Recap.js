import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import G_corbeau from './Graph/Graph_corbeau'
import G_sanglier from './Graph/Graph_sanglier'
import Graph from './Graph/Graph'
import Graph_corbeau from './Graph/Graph_corbeau';


// const data = [
//     { label: 'Corbeau', value: 10 },
//     { label: 'Sanglier', value: 2 }, // valeurs temporaires
//   ]
const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

function NavTabAcitivty() {
    return (
        <View style={style.global}>
          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
              showIcon: true,
              activeTintColor: 'white',
              inactiveTintColor: 'red',
              indicatorStyle: {
                  height: null,
                  top: '10%',
                  bottom: '10%',
                  width: '45%',
                  left: '2.5%',
                  borderRadius: 100,
                  backgroundColor: 'green',
              },
              style: {
                  alignSelf: "center",
                  width: '50%',
                  bottom: '90%',
                  borderRadius: 100,
                  borderColor: "blue",
                  backgroundColor: "white",
                  elevation: 5, // shadow on Android
                  shadowOpacity: .10, // shadow on iOS,
                  shadowRadius: 4, // shadow blur on iOS
              },
              tabStyle: {
                  borderRadius: 100,
              },
            }}>
          <Tab.Screen
              name="corbeau"
              component={Graph_corbeau}
              options={{
              tabBarLabel: 'Graph_corbeau',
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('../icons/raven.png')}
                    resizeMode="contain"
                    style={{
                      bottom: '30%',
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                  />
                </View>
               ),
              }} />
            <Tab.Screen
              name="sanglier"
              component={G_sanglier}
              options={{
              tabBarLabel: 'Graph_sanglier',
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('../icons/boar.png')}
                    resizeMode="contain"
                    style={{
                      bottom: '30%',
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                  />
                </View>
               ),
              }} />
          </Tab.Navigator>
        </View>
    )
}


// function NavTabAcitivty() {
//   return (
//       <View style={{width: wWidth, height: wHeight}}>
//           <Tab.Navigator
//           // independent={true}
//           tabBarOptions={{
//               showLabel: false,
//               showIcon: true,
//               style: {
//                 position: 'absolute',
//                 bottom: 25,
//                 left: 20,
//                 right: 20,
//                 elevation: 0,
//                 backgroundColor:'#ffffff',
//                 borderRadius: 15,
//                 height: 90,
//               }
//             }}>
//           <Tab.Screen
//               name="Graph_corbeau"
//               component={Graph_corbeau}
//               options={{
//               tabBarLabel: 'Graph_corbeau',
//               tabBarIcon: ({focused}) => (
//               <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
//                 <Image
//                   source={require('../icons/graph.png')}
//                   resizeMode="contain"
//                   leftIconContainerStyle={{ margin: 20 }}
//                   style={{
//                     width: 25,
//                     height: 25,
//                     tintColor: focused ? '#e32f45' : '#748c94',
//                   }}
//                 />
//               </View>
//               ),
//             }} />
//           </Tab.Navigator>
//       </View>
//   )
// }

export default class Recap extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <NavTabAcitivty />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'contain'
    },
    global: {
      width: wWidth, 
      height: wHeight,
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#1b212c',
      resizeMode: 'contain'
    },
})