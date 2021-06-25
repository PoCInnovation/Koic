import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native';
import { VictoryBar, VictoryAxis, VictoryScatter, VictoryChart, VictoryTheme, VictoryLine, VictoryCustomTheme } from 'victory-native';
import { style } from './style.js';
import { sanglierData } from './activity_data';

export const ItemHour = () => {
    return ( 
      <TouchableOpacity style={style.cardMax}>
        <View style={{flexDirection: 'row'}}>
          <View>
           <Image
              source={require('../icons/time.png')}
              resizeMode='cover'
              style={{
                marginTop: 10,
                marginLeft: 15,
                width: 25,
                height: 25
              }} />
              <Text style={style.textHour}>20h</Text>
          </View>
        </View>
      </TouchableOpacity>
  )}
  
export const ItemGraph = () => {
    return ( 
      <TouchableOpacity style={style.cardGraph}>
        <View style={{flexDirection: 'row'}}>
          <Chart />
        </View>
      </TouchableOpacity>
  )}
  
export const ItemMax = () => {
    return (
      <TouchableOpacity style={style.cardHour}>
        <View style={{flexDirection: 'row'}}>
        <View>
           <Image
              source={require('../icons/frequence.png')}
              resizeMode='cover'
              style={{
                marginTop: 10,
                marginLeft: 15,
                width: 25,
                height: 25
              }} />
              <Text style={style.textMax}>20</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

function Chart () {
  return (
    <View style={{marginTop: -15, marginRight: 10, marginLeft: -15}}>
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
        data={sanglierData}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }} />
        <VictoryScatter
          data={sanglierData}
          size={7}
          style={{
            data: {
              fill: '#6c53f8'
            }
          }} />
        <VictoryAxis
          dependentAxis
          style={{
            axis: {
              stroke: 'transparent'
            },
            grid: {
              stroke: 'grey'
            }
          }}/>
        <VictoryAxis
          style={{
            axis: {
              stroke: 'transparent'
            },
            grid: {
              stroke: 'transparent'
            }
          }}/>
      </VictoryChart>
    </View>

  )
}