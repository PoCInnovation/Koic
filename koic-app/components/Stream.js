import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Video } from 'expo-av';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;


function Header() {
    return (
        <View style={{
            backgroundColor: '#00a46c',
            height: '10%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20}}>
        </View>
    );  
}

export default class Stream extends React.Component {
    render() {
        return (
            <>
            <Header />
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position: 'relative'}}>
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
            </>
        );
    }
}

