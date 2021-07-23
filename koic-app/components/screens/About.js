import React from 'react'
import {View, Text } from 'react-native'
import { Header } from '../utils/graph'
import { style } from '../utils/style'

// Qui nous sommes ?
// Pourquoi ce projet ?
// Nous contacter

function Infos () {
    return (
        <View>
            <Text style={{top: '70%', marginLeft: '5%', alignItems: 'flex-start', justifyContent: 'center', fontSize: 30, fontWeight: 'bold', color: '#583cfb'}}>
                Qui sommes-nous ?</Text>
            <Text>Ce projet a été realisé par des étudiants de l'association</Text>
            <Text style={{color: '#583cfb', fontWeight: 'bold', }}>PoC innovation</Text>
            {/* <Text>Vous avez des questions ?</Text> */}
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