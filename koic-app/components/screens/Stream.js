import React, {useEffect} from 'react'
import { Text, View, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import { WebView } from 'react-native-webview'
import { Video } from 'expo-av';
import { Header } from '../utils/graph'
import {IP} from '@env'

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

export default function Stream(props) {
    return (
        <>
        <Header text='Stream'/>
        <WebView
        source={{
          uri: 'http://' + `${IP}` + ':5000/stream/1',
        }}
        style={{ flex: 1, alignItems: "center", justifyContent: "center", position: 'relative', width: wWidth, height: wHeight / 2}}
        />
        {/* <View >
            <Video
                source={
                    {
                        uri: 
                    }
                }
                resizeMode="contain"
                useNativeControls
                style={{width: wWidth, height: wHeight / 2}}
            />
        </View> */}
        </>
    );
}
