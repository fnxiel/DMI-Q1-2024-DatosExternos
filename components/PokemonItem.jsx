import React, {useState, useEffect} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

import axios from 'axios';

import ComponenteError from './ComponenteError'

import { Cargando } from './Cargando';

export function PokemonItem({item}){
  const [data, setData] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () =>{
      try {
        const respuesta = await axios.get(item.url)
        setData(respuesta.data)
        setError(null)  
      } catch (error) {
        console.error(`Error al obtener datos del servicio`, error)
        setError(error)
      } finally {
        setCargando(false)
      }
      
    } 
    fetchPokemon()
  }, [])

if(cargando){
    return (
      <Cargando texto="Cargando..."></Cargando>
    )
  }

  if(error){
    return (
      <ComponenteError mensaje="Ocurrio un error al traer los datos"></ComponenteError>
    )
  }

    return <View style={styles.container}>
      <Image source={{uri: data.sprites.front_default}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.id}>ID: {data.id}</Text>
      </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    loadingContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    infoContainer:{
        flex: 1
    },
    name:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    id:{
        color: "#555",
        marginTop: 5,
    }
})
