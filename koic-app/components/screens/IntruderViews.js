import React from 'react'

import { WebView } from 'react-native-webview'
import { Dimensions } from 'react-native'
import {IP} from '@env'

const wWidth = Dimensions.get('window').width
const wHeight = Dimensions.get('window').height

function IntruderViews({nbViews}) {
    const WebViewStyle = {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
        width: wWidth,
        height: wHeight / 2
    }
    const arr = []

    for (let i = 0; i < nbViews; ++i) {
        arr.push(<WebView source={{ uri: `http://${IP}:5000/stream/1` }} style={WebViewStyle} key={i}/>)
    }
    return arr
}

export default IntruderViews