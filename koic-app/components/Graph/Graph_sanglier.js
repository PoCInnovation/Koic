import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native';
import { VictoryBar, VictoryAxis, VictoryScatter, VictoryChart, VictoryTheme, VictoryLine, VictoryCustomTheme } from 'victory-native';
import { ItemHour, ItemGraph, ItemMax } from '../graph'

// let sanglierData = [
//   { x: 15, y: 9},
//   { x: 20, y: 8 },
//   { x: 16, y: 10 },
//   { x: 13, y: 20 },
//   { x: 3, y: 7 },
//   { x: 14, y: 13 },
//   { x: 4, y: 8 }
// ]

// function ItemHour() {
//   return ( 
//     <TouchableOpacity style={style.cardMax}>
//       <View style={{flexDirection: 'row'}}>
//         <View>
//          <Image
//             source={require('../../icons/time.png')}
//             resizeMode='cover'
//             style={{
//               marginTop: 10,
//               marginLeft: 15,
//               width: 25,
//               height: 25
//             }} />
//             <Text style={style.textHour}>20h</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
// )}

// function ItemGraph() {
//   return ( 
//     <TouchableOpacity style={style.cardGraph}>
//       <View style={{flexDirection: 'row'}}>
//         <Chart />
//       </View>
//     </TouchableOpacity>
// )}

// function ItemMax() {
//   return (
//     <TouchableOpacity style={style.cardHour}>
//       <View style={{flexDirection: 'row'}}>
//       <View>
//          <Image
//             source={require('../../icons/frequence.png')}
//             resizeMode='cover'
//             style={{
//               marginTop: 10,
//               marginLeft: 15,
//               width: 25,
//               height: 25
//             }} />
//             <Text style={style.textMax}>20</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   )
// }

// function Chart () {
//   return (
//     <View style={{marginTop: -15, marginRight: 10, marginLeft: -15}}>
//       <VictoryChart
//         theme={VictoryCustomTheme}
//         height={250}
//         width={380}>
//         <VictoryLine style={{
//           data: {
//             stroke: '#6c53f8'
//           },
//           parent: {
//            border: '1px solid #ccc' 
//           }
//         }}
//         data={sanglierData}
//         animate={{
//           duration: 2000,
//           onLoad: { duration: 1000 }
//         }} />
//         <VictoryScatter
//           data={sanglierData}
//           size={7}
//           style={{
//             data: {
//               fill: '#6c53f8'
//             }
//           }} />
//         <VictoryAxis
//           dependentAxis
//           style={{
//             axis: {
//               stroke: 'transparent'
//             },
//             grid: {
//               stroke: 'grey'
//             }
//           }}/>
//         <VictoryAxis
//           style={{
//             axis: {
//               stroke: 'transparent'
//             },
//             grid: {
//               stroke: 'transparent'
//             }
//           }}/>
//       </VictoryChart>
//     </View>

//   )
// }

export default class Graph_sanglier extends React.Component {
  render () {
    // let sampleData = [
    //   {seriesName: 'sanglier', data: sanglierData, color: 'red'},
    // ]
    return (
      <View style={style.container}>
      <ItemGraph/>
      <ItemHour/>
      <ItemMax/>
    </View>
    );
  }
}

const style = StyleSheet.create({
  textMax: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#6c53f8',
    marginLeft: '25%'
  },
  textHour: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#6c53f8',
    marginLeft: '8%'
  },
  container: {
    // flex: 1,
  },
  cardGraph: {
    width: '90%',
    paddingVertical: 10,
    height: '45%',
    bottom: '0%',
    top: '7%',
    marginLeft: '5%',
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
  cardMax: {
    width: '40%',
    paddingVertical: 10,
    height: '25%',
    bottom: '1%',
    top: '7%',
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
    top: '-21.5%',
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