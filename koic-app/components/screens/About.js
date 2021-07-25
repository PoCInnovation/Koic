import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { Header } from '../utils/graph'
import { style } from '../utils/style'

function Infos () {
    return (
        <View>
            <Text style={styles.Title}>
            What is this project ?</Text>
            <Text style={styles.Text}>Koic is a connected scarecrow that can be used to scare away crop pests such as crows and wild boars in different ways.</Text>
            <Text style={styles.Title}>Who are we?</Text>
            <Text style={styles.Text}>We are students from the PoC innovations association.</Text>
            <Text style={styles.Title}>Contact us</Text>
            <Text style={styles.Text}>link</Text>
        </View>
    )
}

export default class About extends React.Component {
    render() {
        return (
            <View>
                <Header text='About' />
                <Infos />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Title: {
        top: '20%', 
        marginLeft: '2%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#583cfb'
    },
    Text: {
        color: '#583cfb',
        fontWeight: 'bold',
        marginTop : '5%',
        bottom : '-30%'
    }
})