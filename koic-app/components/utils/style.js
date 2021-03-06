import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
    textMax: {
      fontSize: 70,
      fontWeight: 'bold',
      color: '#6c53f8',
      marginLeft: '25%'
    },
    textHour: {
      fontSize: 70,
      fontWeight: 'bold',
      color: '#6c53f8',
      marginLeft: '8%'
    },
    cardGraph: {
      width: '90%',
      paddingVertical: 10,
      height: '45%',
      bottom: '0%',
      top: '7%',
      marginLeft: '5%',
      marginRight: '10%',
      borderRadius: 10,
      backgroundColor: 'white',
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardMax: {
      width: '40%',
      paddingVertical: 10,
      height: '25%',
      bottom: '1%',
      top: '7%',
      marginLeft: '54%',
      marginRight: '10%',
      borderRadius: 10,
      backgroundColor: 'white',
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    viewContainerScrollView: {
      flex: 2,
      flexDirection: 'row',

    },
    viewContainerButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginHorizontal: 10,
        paddingVertical: 20,
        flexGrow: 1,
        
    },
    buttonContainer: {
      flex: 1,
    },
    button: {
        flex: 1,
        width: '50%',
        paddingVertical: 10,
        height: '30%',
        bottom: '20%',
        top: '-5%',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
    cardHour: {
      width: '40%',
      paddingVertical: 10,
      height: '25%',
      bottom: '20%',
      top: '-21.5%',
      marginLeft: '6%',
      marginRight: '35%',
      borderRadius: 10,
      backgroundColor: 'white',
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    headerBar: {
      marginTop: '10%',
      width: '100%',
      alignItems: 'flex-end',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingHorizontal: 20,
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
    },
  })