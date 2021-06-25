import React, { Component } from 'react'
import { View } from 'react-native';
import { ItemHour, ItemGlobalGraph, ItemMax } from '../utils/graph'
import { ravenData, boarData } from '../data/activity_data';

export default class raven_activity extends React.Component {
  render () {
    return (
      <View>
      <ItemGlobalGraph data={ravenData} data2={boarData}/>
      <ItemHour hour={'15h'} />
      <ItemMax nb={'18'}/>
    </View>
    );
  }
}