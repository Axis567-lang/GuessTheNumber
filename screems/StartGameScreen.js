import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-web';
import Card from '../components/Card.js'
import Colors from '../constants/Colors.js';
import Input from '../components/Input.js';

const StartGameScreen = (onStartGame) => {

  // manejar el edo de la app
  const [first, setfirst] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState(undefined)


  const numberInputHandler = input =>
  {
                        // expresión regular
    setfirst(input.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () =>
  {
    setfirst('')
    setConfirm(false)
  }

  const confirmInputHandler = () =>
  {
    const chosenNumber = parseInt(first);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return
    
    setConfirm(true)
    setSelectedNumber(chosenNumber)
    setfirst('')
  }

  let confirmedOutput;

  if(confirm)
  {
    confirmedOutput =
    (
      <Card style = {styles.selectedContainer}>
        <Text>You selected: </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
        title = 'Ready to start the game?'
        onPress= { () => onStartGame(selectedNumber)}
        />
      </Card>
    )
  }

  return (
    <View style={styles.screen}>
        
        <Card>
        <Text style={styles.title}>Select a Number</Text>
          <Input
            style={style.input}
            blurOnSubmit //Android
            autoCapitalize = 'none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength = {2}
            onChangeText={numberInputHandler}
            value={first}
          />
          <View style={styles.buttonContainer}>
            <Button 
              style={styles.button}
              title="Reset"
              color={Colors.secondary}
              onPress = {resetInputHandler}
            />
            <View>
              <Button
                style={styles.button}
                title="Confirm"
                color={Colors.primary}
                onPress = {confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
    </View>
  )
}

const styles = StyleSheet.create
({
    selectedContainer:
    {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
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
    button:
    {
      width: '100%'
    },
    buttonContainer:
    {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15

    },
    // input personalizado
    input:
    {
      width: 50,
      textAlign: 'center'
    }
});

export default StartGameScreen