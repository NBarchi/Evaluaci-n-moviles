import React from 'react'
import { StyleSheet, View } from 'react-native'

export const EjercicioDos4 = () => {
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
        justifyContent: 'center',
        alignItems: 'center'
    },

    box1:{
        width:100,
        height: 100,
        backgroundColor: '#1A5276',
        borderWidth: 4,
        borderColor: 'white', 
        position: 'absolute',
        left:0,
        top: 10    
    },

    box2:{
        width:100,
        height: 100,
        backgroundColor: '#F5B041',
        borderWidth: 4,
        borderColor: 'white',
       
        
    },

    box3:{
        width:100,
        height: 100,
        backgroundColor: '#5DADE2',
        borderWidth: 4,
        borderColor: 'white', 
        position: 'absolute',
        right: 0,
        bottom: 30,
    },

})
