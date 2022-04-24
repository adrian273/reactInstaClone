import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}> {props.buttonName} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 35,
        borderRadius: 15,
        marginHorizontal: 15,
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center'   
    }
})

export default ButtonComponent