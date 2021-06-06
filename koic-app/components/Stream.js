import React from 'react'
import { Text } from 'react-native'
import { Video } from 'expo-av';


export default class Stream extends React.Component {
    render() {
        return (
            <Video
                // source={
                // {uri: 'http:  //d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', }
                // }
                // resizeMode="contain"
                // shouldPlay
                // useNativeControls
                style={{ width: "100%", height: "50%" }}
            />
        );
    }
}