import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { ItemHour, ItemGraph, ItemMax } from '../utils/graph'
import { ravenData, maxN, maxH } from '../data/activity_data';


export default class raven_activity extends React.Component {
  render () {
    return (
      <View>
        <ItemGraph data={ravenData}/>
        <ItemHour hour={maxH} />
        <ItemMax nb={maxN}/>
      </View>
    )
  }
}