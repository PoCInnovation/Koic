import React from 'react'
import {View, Text } from 'react-native'

export default class About extends React.Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:'#fff', bottom: 0, padding: "5%", margin: "5%", display: "fix", color:'red'}}>
                <Text>
                    A propos ici.
                </Text>
            </View>
        );
    }
}