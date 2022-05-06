import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from './components/Header'
import StartGameScreen from './screems/StartGameScreen';
import { useState } from 'react';
import GameOverScreen from './screems/GameOverScreen';

export default function App()
{
    // SPA nunca redirecciones a un usuario; todo el contenido en una screen
    const [selectedNumber, setselectedNumber] = useState(undefined);
    const [numberOfGuesses, setnumberOfGuesses] = useState(0)

    const gameOverHandler = (rounds) =>
    {
        setnumberOfGuesses(rounds);   
    }

    const startGameHandler = ( number ) =>
    {
        setselectedNumber(number);

    }

    let content = 
    <StartGameScreen onStartGame={startGameHandler}/>

    if(selectedNumber && numberOfGuesses === 0)
    {
        content = <GameScreen selectedNumber={selectedNumber}  onGameOver={gameOverHandler}/>;
    }
    else if (selectedNumber && numberOfGuesses > 0)
    {
        content = <GameOverScreen rounds={numberOfGuesses} />
    }
     

    return (
        <View style={styles.screen}>
            <Header title={"Guess the number"} />
            // si se cumple la condición va a hacer el StartGameScreen
            {content}
            /*{selectedNumber === undefined && <StartGameScreen />}
            { selectedNumber !== undefined && <GameScreen/>}*/
        </View>
    );
}

const styles = StyleSheet.create
({
    screen:
    {
        flex: 1
    }
});

