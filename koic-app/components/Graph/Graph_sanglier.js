import React, { Component } from 'react'
import PureChart from 'react-native-pure-chart';
import { StyleSheet, Text, View, Button, StatusBar, Dimensions } from 'react-native';

const wi = Dimensions.get('window').width

export default class Graph_sanglier extends React.Component {
  render () {
    let sampleData = [
      {x: '0h', y: 8},
      {x: '5h', y: 2},
      {x: '10h', y: 7},
      {x: '15h', y: 9},
      {x: '20h', y: 4}
    ]
    return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#1b212c'}}>
      <PureChart type={'line'}
      data={sampleData}
      width={'100%'}
      height={100}/>
    </View>
    );
  }
}
