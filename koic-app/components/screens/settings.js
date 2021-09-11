import React, { Component } from 'react'
import {View } from 'react-native'
import { Header } from '../utils/graph'


export default class Settings extends React.Component {
    render() {
        return (
            <View>
                <Header text='Settings'/>
            </View>
        );
    }
}