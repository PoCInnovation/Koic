import React, {useEffect} from 'react'
import { Text, View, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import { Video } from 'expo-av';
import { Header } from '../utils/graph'

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

export default function Stream(props) {
    const uri = "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";

    return (
        <>
        <Header text='Stream'/>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position: 'relative'}}>
            <Video
                source={
                    {
                        uri: uri,
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
/*
export default class Stream extends React.Component {
    render() {
        return (
            <>
            <Header text='Stream'/>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position: 'relative'}}>
                <Video
                    source={
                        {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', }
                    }
                    resizeMode="contain"
                    useNativeControls
                    style={{width: wWidth, height: wHeight / 2}}
                />
            </View>
            </>
        );
    }
}
 */