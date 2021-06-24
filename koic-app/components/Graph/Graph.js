import React, { Component } from 'react'
import PureChart from 'react-native-pure-chart';
import { Card, Icon } from 'react-native-elements'
import { StyleSheet, Text, View, Button, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native';

const wHeight = Dimensions.get('window') / 2


function ItemMax() {
  return ( 
    <TouchableOpacity style={style.cardMax}>
      <View style={{flexDirection: 'row'}}>
        <View>
         <Image
            source={require('../../icons/time.png')}
            resizeMode='cover'
            style={{
              marginTop: 10,
              marginLeft: 15,
              width: 25,
              height: 25
            }} />
        </View>
      </View>
    </TouchableOpacity>
)}

function ItemHour() {
  return (
    <TouchableOpacity style={style.cardHour}>
      <View style={{flexDirection: 'row'}}>
      <View>
         <Image
            source={require('../../icons/trophee.png')}
            resizeMode='cover'
            style={{
              marginTop: 10,
              marginLeft: 15,
              width: 25,
              height: 25
            }} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
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
      <View style={style.container}>
        <ItemMax/>
        <ItemHour/>
          {/* <PureChart type={'line'}
            data={sampleData}
            width={'90%'}
            numberOfYAxisGuideLine={5}
            height={200}/>
          <Text style={styles.cardText}>
            Graph
          </Text> */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardMax: {
    width: '40%',
    paddingVertical: 10,
    height: '25%',
    bottom: '20%',
    top: '59%',
    marginLeft: '54%',
    marginRight: '10%',
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHour: {
    width: '40%',
    paddingVertical: 10,
    height: '25%',
    bottom: '20%',
    top: '30%',
    marginLeft: '6%',
    marginRight: '35%',
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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