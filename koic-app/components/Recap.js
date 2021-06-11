import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import Graph from './Graph'

const data = [
    { label: 'Corbeau', value: 10 },
    { label: 'Sanglier', value: 2 }, // valeurs temporaires
  ]

export default class Recap extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Graph data={data} round={1} unit={'animaux'}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
    })