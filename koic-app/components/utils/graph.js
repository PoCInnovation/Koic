import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native';
import { VictoryBar, VictoryAxis, VictoryScatter, VictoryChart, VictoryTheme, VictoryLine, VictoryCustomTheme } from 'victory-native';
import { style } from './style.js';

export const ItemHour = (props) => {
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
              <Text style={style.textHour}>{props.hour}</Text>
          </View>
        </View>
      </TouchableOpacity>
  )}
  
export const ItemGraph = (props) => {
    return ( 
      <TouchableOpacity style={style.cardGraph}>
        <View style={{flexDirection: 'row'}}>
          <Chart data={props.data}/>
        </View>
      </TouchableOpacity>
  )}

export const ItemGlobalGraph = (props) => {
    return ( 
      <TouchableOpacity style={style.cardGraph}>
        <View style={{flexDirection: 'row'}}>
          <GlobalChart data={props.data} data2={props.data2}/>
        </View>
      </TouchableOpacity>
  )}

export const ItemMax = (props) => {
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
              <Text style={style.textMax}>{props.nb}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  function GlobalChart (props) {
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
          data={props.data}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }} />
          <VictoryLine style={{
            data: {
              stroke: 'red'
            },
            parent: {
             border: '1px solid #ccc' 
            }
          }}
          data={props.data2}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }} />
          <VictoryScatter
            data={props.data}
            size={7}
            style={{
              data: {
                fill: '#6c53f8'
              }
            }} />
          <VictoryScatter
            data={props.data2}
            size={7}
            style={{
              data: {
                fill: 'red'
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

function Chart (props) {
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
        data={props.data}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }} />
        <VictoryScatter
          data={props.data}
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