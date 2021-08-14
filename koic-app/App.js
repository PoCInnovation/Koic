import React from 'react';
import 'react-native-gesture-handler';
import { View, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stream from './components/screens/Stream'
import Activity from './components/screens/Recap'
import About from './components/screens/About'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

function NavTab() {
  return (
      <View style={{width: wWidth, height: wHeight}}>
        <NavigationContainer >
          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
              showIcon: true,
              style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor:'#ffffff',
                borderRadius: 15,
                height: 70,
              }
            }}>
            <Tab.Screen
              name="Stream"
              component={Stream}
              options={{
                tabBarLabel: 'Stream',
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                    <Image
                      source={require('./icons/stream.png')}
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
              }}/>
              <Tab.Screen
                name="Activity"
                component={Activity}
                options={{
                tabBarLabel: 'Activity',
                tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('./icons/graph.png')}
                    resizeMode="contain"
                    leftIconContainerStyle={{ margin: 20 }}
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
                name="About"
                component={About}
                options={{
                tabBarLabel: 'About',
                tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                  <Image
                    source={require('./icons/about.png')}
                    resizeMode="contain"
                    leftIconContainerStyle={{ margin: 20 }}
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
        </NavigationContainer>
      </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <NavTab />
        </View>
      </SafeAreaProvider>
    );
  }
}