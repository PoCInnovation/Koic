import React, {useEffect} from 'react'
import { Text, View, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import { Video } from 'expo-av';
import { Header } from '../utils/graph'
import {IP} from '@env'

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

export default function Stream(props) {
    return (
        <>
        <Header text='Stream'/>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position: 'relative'}}>
            <Video
                source={
                    {
                        uri: 'http://' + `${IP}` + ':5000/stream/1',
                    }
                }
                resizeMode="contain"
                useNativeControls
                style={{width: wWidth, height: wHeight / 2}}
            />
        </View>
        </>
    );
}
