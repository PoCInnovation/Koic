import React, { Component } from 'react'
import PureChart from 'react-native-pure-chart';
import { StyleSheet, Text, View, Button, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native';
// import { Image } from 'react-native-elements';

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
            source={require('../../icons/frequence.png')}
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
export default class Graph_corbeau extends React.Component {
  render () {
    let corbeauData = [
      {x: '0h', y: 1},
      {x: '5h', y: 6},
      {x: '10h', y: 2},
      {x: '15h', y: 5},
      {x: '20h', y: 10}
    ]
    let sampleData = [
      {seriesName: 'corbeau', data: corbeauData, color: 'yellow'},
    ]
    return (
      <View style={style.container}>
        <ItemMax/>
        <ItemHour/>
        {/* <View style={{top: '20%'}}> */}
          {/* <PureChart type={'line'}
          data={sampleData}
          width={'100%'}
          numberOfYAxisGuideLine={5}
          height={100}
          /> */}
        {/* </View> */}
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
  }
})