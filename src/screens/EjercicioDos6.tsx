import React from 'react'
import { StyleSheet, View } from 'react-native'

export const EjercicioDos6 = () => {
  return (
    <View style={styles.contenedor}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor: '#2E4053',
    },

    box1:{
        width:'100%',
        height: 100,
        backgroundColor: '#1A5276',
        borderWidth: 4,
        borderColor: 'white',
        flex:1
    },

    box2:{
        width:'100%',
        height: 100,
        backgroundColor: '#F5B041',
        borderWidth: 4,
        borderColor: 'white',
        flex: 1
    },

    box3:{
        width:'100%',
        height: 100,
        backgroundColor: '#5DADE2',
        borderWidth: 4,
        borderColor: 'white',
        flex: 2
    },

})
