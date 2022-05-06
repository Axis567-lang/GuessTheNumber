import React, { useState, useRef, useEffect } from 'react'
import NumberContainer from '../components/NumberContainer';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import Constants from "../constants/constants.js";

const generateRandBetween = ( min, max, exclude ) => 
{
    min = Math.ceil(min);
    max = Math.floor(max);

    const randNum = Math.random() * (max - min) + min;
    const randNumFloored = Math.floor(randNum);

    if(randNumFloored === exclude)
    {
        return generateRandBetween(min, max, exclude);
    }
    else{
        randNumFloored;
    }
}
const GameScreen = ({selectedNumber, onGameOver}) => 
{
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const [currentGuess, setCurrentGuess] =
    useState(generateRandBetween(currentLow, currentHigh, selectedNumber));

    const [rounds, setRounds] = useState(0)

    // useEffect sólo se ejecuta en el primer render del componente
    /**
     * useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    
    third es escuchado; la función se corre en el momento en que cambié el estado de dummyValue.
     */
    useEffect(() => {
      if(currentGuess === selectedNumber)
        {
            onGameOver(rounds); 
        }
    }, [currentGuess])
    
    const nextGuess = direction =>
    {
        if ( (direction === Constants.direction.higher && currentGuess > selectedNumber) || (direction === Constants.direction.lower && currentGuess < selectedNumber) )
        {
            Alert('Please don\'t lie, you know that\'s wrong', [{ text: 'Sorry', sytle:'cancel' }]);
            Alert('Pls don\' lie');
            return
        }

        if (direction === Constants.direction.lower)
        {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess;
        }

        const nextNum = 
        generateRandBetween(currentLow.current, currentHigh.current, currentGuess);
        setRounds( currentRounds => setRounds(currentRounds + 1) );
        setCurrentGuess(nextNum);

        if(nextNum === selectedNumber)
        {
            alert('you won yei >w<');
        }
    }

  return (
    <View style = {styles.screen}>
        <Text>Computer Guess: </Text>
        <NumberContainer>{currentGuess} </NumberContainer>    
        <Card style={styles.buttonContainer}>
            <Button title = 'Lower' onPress={ () => { nextGuess(Constants.direction.lower) } }/>
            <Button title = 'Higher' onPress={ () => {nextGuess(Constants.direction.higher) } }/>
        </Card>
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
    buttonContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    }
});
export default GameScreen