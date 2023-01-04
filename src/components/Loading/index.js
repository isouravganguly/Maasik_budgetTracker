import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

import useThemeStyles from '../../hooks/themes/useThemeStyles'
import styles from './styles'

const Loading = () => {

    const style = useThemeStyles(styles)
  return (
    <View style = {style.loader}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading