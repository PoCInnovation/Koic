import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { ItemHour, ItemGraph, ItemMax } from '../utils/graph'
import { person } from '../data/activity_data';

export default class person_activity extends React.Component {
  render () {
    console.log(person)
    return (
      <View>
        <ItemGraph data={person.data}/>
        <ItemHour hour={person.mostAffluentHour} />
        <ItemMax nb={person.maxValue}/>
      </View>
    )
  }
}