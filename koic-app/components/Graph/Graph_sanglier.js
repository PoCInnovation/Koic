import React, { Component } from 'react'
import PureChart from 'react-native-pure-chart';
import { StyleSheet, Text, View, Button, StatusBar, Dimensions } from 'react-native';

export default class Graph_sanglier extends React.Component {
  render () {
    let sanglierData = [
      {x: '0h', y: 8},
      {x: '5h', y: 2},
      {x: '10h', y: 7},
      {x: '15h', y: 9},
      {x: '20h', y: 4}
    ]
    let sampleData = [
      {seriesName: 'sanglier', data: sanglierData, color: 'red'},
    ]
    return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      {/* <PureChart type={'line'}
      data={sampleData}
      width={'100%'}
      numberOfYAxisGuideLine={5}
      height={200}/> */}
      <Text>test</Text>
    </View>
    );
  }
}
