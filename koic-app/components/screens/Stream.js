import React from 'react'

import { View,  SafeAreaView, Button, ScrollView } from 'react-native'
import { Header } from '../utils/graph'
import { style } from '../utils/style.js'
import IntruderViews from './IntruderViews.js'

function Stream(props) {
    const [nbViews, setNbViews] = React.useState(1)

    return (
        <>
            <Header text='Stream'/>
            <SafeAreaView style={style.viewContainerScrollView}>
                <ScrollView style={style.scrollView}>
                    <IntruderViews nbViews={nbViews}/>
                </ScrollView>
            </SafeAreaView>
            <View style={style.viewContainerButton}>
                <View style={style.button}>
                <Button
                    title={'Add'}
                    color={'#6c53f8'}
                    type="outline"
                    onPress={() => {setNbViews(nbViews + 1)}}
                    accessibilityLabel="Add new view stream"
                />
                </View>
                <View style={style.button}>
                <Button
                    title={'Remove'}
                    type="outline"
                    color={'#6c53f8'}
                    onPress={() => {
                        if (nbViews != 1) {
                            setNbViews(nbViews - 1)
                        }
                    }}
                    accessibilityLabel="Remove new view stream"
                />
                </View>
            </View>
        </>
    )
}

export default Stream