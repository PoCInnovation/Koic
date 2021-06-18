import React, { Component } from 'react'
import PureChart from 'react-native-pure-chart';

export default class Graph_global extends React.Component {
  render () {
    let sanglier = [
        {x: '0h', y: 30},
        {x: '5h', y: 20},
        {x: '10h', y: 17},
        {x: '15h', y: 24},
        {x: '20h', y: 10}

    ]
    let corbeau = [
        {x: '0h', y: 3},
        {x: '5h', y: 8},
        {x: '10h', y: 45},
        {x: '15h', y: 25},
        {x: '20h', y: 13}

    ]
    let sampleData = [
        {seriesName: 'corbeau', data: corbeau, color: 'red'},
        {seriesName: 'sanglier', data: sanglier, color: 'yellow'}
    ]
    return (
      <PureChart type={'line'}
      data={sampleData}
      width={'100%'}
      height={100}/>
    );
  }
}