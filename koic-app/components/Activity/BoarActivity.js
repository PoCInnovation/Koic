import React, { Component } from 'react'
import { View } from 'react-native';
import { ItemHour, ItemGraph, ItemMax } from '../utils/graph'
import { boar } from '../data/activity_data';

function boar_activity() {
  return (
    <View>
      <ItemGraph data={boarData}/>
      <ItemHour hour={maxHourBoar} />
      <ItemMax nb={maxNbBoar}/>
    </View>
  );
}
export default boar_activity