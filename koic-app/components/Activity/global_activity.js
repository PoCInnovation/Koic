import React, { Component } from 'react'
import { View } from 'react-native';
import { ItemHour, ItemGlobalGraph, ItemMax } from '../utils/graph'
import { globalData, raven, boar } from '../data/activity_data';

export default class raven_activity extends React.Component {
  render () {
    return (
      <View>
      <ItemGlobalGraph data={raven.data} data2={boar.data}/>
      <ItemHour hour={globalData.mostAffluentHour} />
      <ItemMax nb={globalData.maxValue}/>
    </View>
    );
  }
}