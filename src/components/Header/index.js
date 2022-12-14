import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useThemeStyles from '../../hooks/themes/useThemeStyles'
import styles from './styles'

const Header = () => {

    const style = useThemeStyles(styles)

  return (
    <View style = {style.headerContainer}>
      <Text style= {style.helloname}>Hi, Joy</Text>
    </View>
  )
}

export default Header

