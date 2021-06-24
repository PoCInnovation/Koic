import React, { Component } from 'react'
import PureChart from 'react-native-pure-chart';
import { StyleSheet, Text, View, Button, StatusBar, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements'

const wHeight = Dimensions.get('window') / 2

export default class Graph_global extends React.Component {
    render () {
    let sanglier = [
      {x: '0h', y: 30},
      {x: '5h', y: 20},
      {x: '10h', y: 17},
      {x: '15h', y: 24},
      {x: '20h', y: 10}

    ]
    let corbeau = [
      {x: '0h', y: 3},
      {x: '5h', y: 8},
      {x: '10h', y: 45},
      {x: '15h', y: 25},
      {x: '20h', y: 13}

    ]
    let sampleData = [
      {seriesName: 'corbeau', data: corbeau, color: 'red'},
      {seriesName: 'sanglier', data: sanglier, color: 'yellow'}
    ]
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <PureChart type={'line'}
            data={sampleData}
            width={'90%'}
            numberOfYAxisGuideLine={5}
            height={200}/>
          <Text style={styles.cardText}>
            Graph
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  cardText: {
    fontSize: 16,
    padding: 10
  },
  card: {
    // flexDirection: 'row',
    // padding: 'spacing',

    backgroundColor: 'grey',
    marginBottom: 10,
    // marginBottom: 'spacing',
    marginLeft: '2%',
    borderRadius: 16,
    width: '96%',
    top: '50%',
    shadowColor: '#e0dbdb',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3
    },
  }
})
// let sanglier = [
//   {x: '0h', y: 30},
//   {x: '5h', y: 20},
//   {x: '10h', y: 17},
//   {x: '15h', y: 24},
//   {x: '20h', y: 10}

// ]
// let corbeau = [
//   {x: '0h', y: 3},
//   {x: '5h', y: 8},
//   {x: '10h', y: 45},
//   {x: '15h', y: 25},
//   {x: '20h', y: 13}

// ]
// let sampleData = [
//   {seriesName: 'corbeau', data: corbeau, color: 'red'},
//   {seriesName: 'sanglier', data: sanglier, color: 'yellow'}
// ]

//<View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#1b212c'}}>