import React from 'react'
import { StyleSheet } from 'react-native';

function GameOverScreen() {
  return (
    <View style={styles.screen}>
        <Text>The game is over</Text>
    </View>
  )
}

const styles = StyleSheet.create
({
    screen:
    {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

export default GameOverScreen