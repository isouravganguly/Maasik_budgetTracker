import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemeProvider from './src/themes/ThemeProvider'

import RootNavigation

const App = () => {
  return (
    <ThemeProvider>
    <RootNavigation />
    </ThemeProvider>
  )
}

export default App

const styles = StyleSheet.create({})