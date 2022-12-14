import { Text, View } from 'react-native'
import React from 'react'
import ProgressBar from '../../components/progressBar'
import Card from '../../components/Card'
import Container from '../../components/Container'
import CustomButton from '../../components/CustomButton'

const AppScreen = () => {
    console.log("im at appscreen")
  return (
    <View style={{flex:1}}>
    <Container>
      <Card />
      <Card />
      </Container>
      <CustomButton type= 'FILLED' icon="plus" style = {{padding: 10, position: 'absolute', bottom: 50, right: 40, alignSelf: 'flex-end'}}/>
    </View>

  )
}

export default AppScreen
