import React from 'react'
import { Text, View, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import { Video } from 'expo-av';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

function Header() {
    return (
      <View style={style.header}>
        <ImageBackground
          source={require('../icons/banner.png')}
          resizeMode='cover'
          style={{
            flex: 1,
            alignItems: 'center'
          }}>
          <View style={style.headerBar}>
              <Text style={{fontSize: 25, fontWeight: 'bold', marginRight: '35%', marginLeft: '8%', color: 'white', top: '10%'}}>Stream</Text>
          </View>
        </ImageBackground>
      </View>
    )
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

const style = StyleSheet.create({
    headerBar: {
      marginTop: '10%',
      width: '100%',
      alignItems: 'flex-end',
      paddingHorizontal: '10%',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingHorizontal: 20
    },
    header: {
      width: '100%',
      height: 100,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      width : wWidth,
      height : wHeight,
    },
    global: {
      width: wWidth, 
      height: wHeight,
      flex: 1,
      justifyContent: 'center',
      resizeMode: 'contain',
      position: 'absolute',
      // alignItems: 'center',
      // flexDirection: 'column',
      // backgroundColor: '#1b212c'
    },
})