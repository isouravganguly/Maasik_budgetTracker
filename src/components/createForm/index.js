import { View } from 'react-native'
import React from 'react'

import InputBox from "../InputBox"

const CreateForm = ({labels}) => {
  return (
    <View style = {{width: "90%"}}>
      {labels.map((label, index) => {
  // const [data, setData] = useState();
        return <InputBox label = {label} key={index}/>
      })}
    </View>
  )
}

export default CreateForm