import React, { Component } from 'react'
import PureChart from 'react-native-pure-chart';
import { StyleSheet, Text, View, Button, StatusBar, Dimensions } from 'react-native';

export default class Graph_corbeau extends React.Component {
  render () {
    let sampleData = [
      {x: '0h', y: 1},
      {x: '5h', y: 6},
      {x: '10h', y: 2},
      {x: '15h', y: 5},
      {x: '20h', y: 10}
    ]
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#1b212c'}}>
          <PureChart type={'line'}
          data={sampleData}
          width={'50%'}
          height={200} />
      </View>
    );
  }
}
