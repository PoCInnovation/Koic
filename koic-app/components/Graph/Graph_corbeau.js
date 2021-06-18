import React, { Component, View } from 'react'
import PureChart from 'react-native-pure-chart';

export default class Graph_corbeau extends React.Component {
  render () {
    let sampleData = [
      {x: '0h', y: 1},
      {x: '5h', y: 6},
      {x: '10h', y: 2},
      {x: '15h', y: 5},
      {x: '20h', y: 10}
    ]
    return (
        <PureChart type={'line'}
        data={sampleData}
        width={'100%'}
        height={100} />
    );
  }
}
