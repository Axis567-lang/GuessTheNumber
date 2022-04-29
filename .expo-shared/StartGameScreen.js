import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-web';
import Card from '../components/Card.js'
import Colors from '../constants/Colors.js';
import Input from '../components/Input.js';

const StartGameScreen = () => {

  // manejar el edo de la app
  const [first, setfirst] = useState('')
  const numberInputHandler = input =>
  {
                        // expresión regular
    setfirst(input.replace(/[^0-9]/g, ''))
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
              onPress = {()=>{}}
            />
            <View>
              <Button
                style={styles.button}
                title="Confirm"
                color={Colors.primary}
                onPress = {()=>{}}
              />
            </View>
          </View>
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
})

export default StartGameScreen