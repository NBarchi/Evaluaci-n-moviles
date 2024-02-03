import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const EjercicioUno = () => {

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


  const [pares, setPares] = useState<number[]>([]);
  const [impares, setImpares] = useState<number[]>([]);

  const clasificar = () => {
    const pares : number[] = [];
    const impares : number[] = [];

    numeros.forEach(numero => {
      if (numero % 2 === 0) {
        pares.push(numero);
      } else {
        impares.push(numero);
      }
    });

    setPares(pares);
    setImpares(impares);
    
  };
  
    

  return (
    <View style={styles.container}>
        <Text style={styles.title}>BIENVENIDOS</Text>
        <Text style={styles.text}>vector: {numeros.join(', ')}</Text>
        <TouchableOpacity style={styles.boton}
            onPress={clasificar}>
            <Text style={styles.text1}>CLASIFICAR</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>Numeros Pares: {pares.join(', ')}</Text>
          <Text style={styles.text}>Numeros Impares: {impares.join(', ')}</Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    gap:20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title:{
    fontSize: 30,
    color: 'blue',
  },

  text:{
    fontSize: 15,
    color: 'black',
  },

  boton:{
    backgroundColor: 'blue',
    width: 110,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black'
  },

  text1:{
    fontSize: 15,
    color: 'white'
  }

})


