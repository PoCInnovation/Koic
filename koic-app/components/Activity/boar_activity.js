import React, { Component } from 'react'
import { View } from 'react-native';
import { ItemHour, ItemGraph, ItemMax } from '../utils/graph'
import { boarData, maxHourBoar, maxNbBoar } from '../data/activity_data';

export default class boar_activity extends React.Component {
  render () {
    return (
      <View>
      <ItemGraph data={boarData}/>
      <ItemHour hour={maxHourBoar} />
      <ItemMax nb={maxNbBoar}/>
    </View>
    );
  }
}