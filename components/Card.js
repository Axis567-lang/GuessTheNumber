import React, { Children } from 'react'
import { View } from 'react-native'

const Card = ({children, style}) => 
{
  return (
    <View style={[styles.card, style]}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create
({
    card:
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
    }
})

export default Card