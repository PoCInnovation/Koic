import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Header } from '../utils/graph';

function Infos() {
    return (
        <View>
            <Text style={styles.Title}>
            What is this project ?</Text>
            <Text style={styles.Text}>Koic is a connected scarecrow which is equipped with cameras that film the terrain in real time.
            The filmed images are then analysed. Depending on the animal that is hit,
            the scarecrow will choose a suitable way to repel it in a natural way.</Text>
            <Text style={styles.Title}>Who are we?</Text>
            <Text style={styles.Text}>We are students from the PoC innovations association.</Text>
            <Text style={styles.Title}>Contact us</Text>
            <Text style={styles.Text}>ines.maaroufi@epitech.eu</Text>
            <Text style={styles.Text}>thomas.michel@epitech.eu</Text>
            <Text style={styles.Text}>contact@poc-innovation.fr</Text>
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
        top: '15%', 
        marginLeft: '2%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#583cfb'
    },
    Text: {
        color: 'black',
        fontWeight: 'bold',
        marginTop : '5%',
        marginLeft: '3%',
        marginRight: '1%',
        bottom : '-10%',
        top: '12%'
    }
})