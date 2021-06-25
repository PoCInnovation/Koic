import React from 'react'
import {View, Text } from 'react-native'

export default class About extends React.Component {
    render() {
        return (
      <View backgroundColor='black'>
                <Text style={{flex: 1, alignItems: 'center', textAlign: 'center', paddingVertical: 8}}>A propos ici.</Text>
            </View>
        );
    }
}