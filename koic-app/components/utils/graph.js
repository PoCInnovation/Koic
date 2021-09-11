import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { VictoryAxis, VictoryScatter, VictoryChart, VictoryLine, VictoryCustomTheme } from 'victory-native';
import { style } from './style.js';

export const ItemHour = ({ hour }) => {
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
              <Text style={style.textHour}>{hour}</Text>
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
          x='x'
          y='y'
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
          x='x'
          y='y'
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
            tickValues={[1, 2, 3, 4]}
            tickformat={(t) => `${Math.round(t)}h`}
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
            tickformat={(t) => `${Math.round(t)}h`}
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
        x='x'
        y='y'
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }} />
        <VictoryScatter
          data={props.data}
          x='x'
          y='y'
          size={8}
          style={{
            data: {
              fill: '#6c53f8'
            }
          }} />
        <VictoryAxis
        tickformat={(t) => `${Math.round(t)}h`}
        dependentAxis
        // tickValues={[1, 2, 3, 4]}c
          style={{
            axis: {
              stroke: 'transparent'
            },
            grid: {
              stroke: 'grey'
            }
          }}/>
        <VictoryAxis
          tickformat={(t) => `${Math.round(t)}h`}
          fixLabelOverlap style={{ tickLabels: { padding: 1, fontSize: 8 } }}
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

export const Header = (props) => {
  return (
    <View style={style.header}>
      <ImageBackground
        source={require('../../icons/banner.png')}
        resizeMode='cover'
        style={{
          flex: 1,
          alignItems: 'center'
        }}>
        <View style={style.headerBar}>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginRight: '35%', marginLeft: '10%', color: 'white'}}>{props.text}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}