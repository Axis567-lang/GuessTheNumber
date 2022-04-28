import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-web';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
        <Text style={styles.title}>Select a Number</Text>
        <View style={styles.inputContainer}>
          <TextInput />
          <View style={styles.buttonContainer}>
            <Button style={styles.button} title="Reset"/>
            <Button style={styles.button} title="Confirm"/>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create
({
    screen:
    {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      flexDirection: 'column'
    },
    title:
    {
      fontSize: 20,
      marginVertical: 10
    },
    inputContainer:
    {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: .26,
      shadowRadius: 6,
      // este shadow sólo funciona en iOS lol
      backgroundColor: 'white',
      //  only android
      elevation: 5,
      padding: 20,
      borderRadius: 10
    },
    button:
    {

    },
    buttonContainer:
    {
      flexDirection: 'row',
      flex: 1
    }
})

export default StartGameScreen