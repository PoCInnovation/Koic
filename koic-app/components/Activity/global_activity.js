import React, { Component } from 'react'
import { View } from 'react-native';
import { ItemHour, ItemGlobalGraph, ItemMax } from '../utils/graph'
import { globalData, person, chair } from '../data/activity_data';

export default class person_activity extends React.Component {
  render () {
    return (
      <View>
      <ItemGlobalGraph data={person.data} data2={chair.data}/>
      <ItemHour hour={globalData.mostAffluentHour} />
      <ItemMax nb={globalData.maxValue}/>
    </View>
    );
  }
}