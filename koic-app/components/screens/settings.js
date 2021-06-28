import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import { Header } from '../utils/graph'
import { style } from '../utils/style'
import { Linking } from 'react-native';

function Contact () {
    
}

export default class Settings extends React.Component {
    render() {
        return (
            <View>
                <Header text='Settings'/>
            </View>
        );
    }
}