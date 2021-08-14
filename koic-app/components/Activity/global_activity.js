import React, { Component } from 'react'
import { View } from 'react-native';
import { ItemHour, ItemGlobalGraph, ItemMax } from '../utils/graph'
import { ravenData, boarData, maxHourGlobal, maxNbGlobal } from '../data/activity_data';

export default class raven_activity extends React.Component {
  render () {
    return (
      <View>
      <ItemGlobalGraph data={ravenData} data2={boarData}/>
      <ItemHour hour={maxHourGlobal} />
      <ItemMax nb={maxNbGlobal}/>
    </View>
    );
  }
}