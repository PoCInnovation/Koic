import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { ItemHour, ItemGraph, ItemMax } from '../utils/graph'
import { raven } from '../data/activity_data';

export default class raven_activity extends React.Component {
  render () {
    return (
      <View>
        <ItemGraph data={raven.data}/>
        <ItemHour hour={raven.mostAffluentHour} />
        <ItemMax nb={raven.maxValue}/>
      </View>
    )
  }
}