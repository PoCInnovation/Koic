import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Video } from 'expo-av';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

export default class Stream extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Video
                source={
                {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', }
                }
                resizeMode="contain"
                // shouldPlay
                useNativeControls
                // isLooping
                style={{width: wWidth, height: wHeight / 2}}
            />
            </View>
        );
    }
}