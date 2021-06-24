import React, { Component } from 'react'
import PureChart from 'react-native-pure-chart';
import { StyleSheet, Text, View, Button, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryCustomTheme } from 'victory-native';

let sanglierData = [
  {x: '8h', y: 8},
  {x: '5h', y: 2},
  {x: '10h', y: 7},
  {x: '15h', y: 9},
  {x: '20h', y: 4}
]

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

function Chart () {
  return (
    <View style={{marginTop: -250}}>
      <VictoryChart
        theme={VictoryCustomTheme}
        height={250}
        width={380}>
        <VictoryLine style={{
          data: {
            stroke: '#6c53f8'
          },
          parent: {
           border: '1px solid #ccc' 
          }
        }}
        // data={sanglierData}
        categories={{
          x: ['10', '2', '3', '5', '12', ],
          y:  ['8h', '12h', '16h', '20h', '24h']
        }}/>
      </VictoryChart>
    </View>

  )
}

export default class Graph_sanglier extends React.Component {
  render () {
    let sampleData = [
      {seriesName: 'sanglier', data: sanglierData, color: 'red'},
    ]
    return (
      <View style={style.container}>
      <ItemMax/>
      <ItemHour/>
      <Chart/>
      {/* <PureChart type={'line'}
      data={sampleData}
      width={'100%'}
      numberOfYAxisGuideLine={5}
      height={200}/> */}
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