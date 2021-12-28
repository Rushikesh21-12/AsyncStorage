import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HomeScreen() {

    const [data, setData] = useState('')
    const [inputedData, setInputedData] = useState('')

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('@storage_Key', data)
            setData('')
            alert('Data saved')
        } catch (e) {
            console.log(e)
        }
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
            setInputedData(value)
        } catch(e) {
            alert('error in get')
        }
    }
      
    return (
        <View style = {styles.container}>
            <TextInput 
                value = {data}                
                style = {styles.input} 
                placeholder = 'Enter data'
                onChangeText = {(value) => setData(value)}
            />

            <View style = {styles.button}>
                <Button title = 'Set Data' onPress = {storeData}/>
            </View>

            <View style = {styles.button}>
                <Button title = 'Get Data' onPress = {getData}/>
            </View>

            <Text style = {styles.inputedText}>{inputedData}</Text>
 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30
    },

    input: {
        backgroundColor: '#c7c3c3',
        marginVertical: 10,
        borderRadius: 10,
        padding: 10
    },

    button: {
        marginVertical: 10
    },

    inputedText: {
        textAlign: 'center'
    }
})
