import React from 'react'

import { View,  SafeAreaView, Button, ScrollView } from 'react-native'
// import { Video } from 'expo-av'
import { Header } from '../utils/graph'
import { style } from '../utils/style.js'
import IntruderViews from './IntruderViews.js'

function Stream(props) {
    const [nbViews, setNbViews] = React.useState(1)

    return (
        <>
            <Header text='Stream'/>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <IntruderViews nbViews={nbViews}/>
                </ScrollView>
            </SafeAreaView>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                <Button
                    style={style.button}
                    title={'Add View'}
                    onPress={() => {setNbViews(nbViews + 1)}}
                    accessibilityLabel="Learn more about this purple button"
                />
                </View>
                <View style={styles.buttonContainer}>
                <Button
                    style={style.button}
                    title={'Remove View'}
                    color={'#841584'}
                    onPress={() => {
                        if (nbViews != 1) {
                            setNbViews(nbViews - 1)
                        }
                    }}
                    accessibilityLabel="Learn more about this purple button"
                />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 250,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    buttonContainer: {
      flex: 1,
    }
});

export default Stream