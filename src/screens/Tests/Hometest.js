import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import useTheme from '../../hooks/themes/useTheme'
import useThemeStyles from '../../hooks/themes/useThemeStyles'



const Hometest = () => {

    // const theme = useTheme()
    const style = useThemeStyles(styles)
    console.log(style)
  return (
    <View style = {style.container}>
      <Text>Hometest</Text>
    </View>
  )
}


const styles = theme =>
    StyleSheet.create({
        
        container: {
            backgroundColor: theme.colors.Primary,
            flex: 1,
        }
    })
    

export default Hometest